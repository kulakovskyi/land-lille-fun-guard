var logo = document.querySelector(".land__logo"), body = document.querySelector("body"),
    landStart = (logo.scrollIntoView({
        block: "center",
        behavior: "smooth"
    }), body.classList.add("_lock"), document.querySelector(".land__start")),
    landContent = document.querySelector(".land__content"), slides = document.querySelectorAll(".slide");

function hiddenStart() {
    landStart.classList.add("_hidden"), landContent.classList.remove("_hidden"), body.classList.remove("_lock");
    var t = 0;
    setInterval(function () {
        e(t + 1)
    }, 3500);

    function e(e) {
        slides[t].className = "slide", t = (e + slides.length) % slides.length, slides[t].className = "slide showing"
    }
}

window.setTimeout(hiddenStart, 3e3);
var copyCodeContent = "FUN100", copyBtn = document.querySelector(".land__content-bonus-copy"),
    codeCopy = document.querySelector(".land__content-bonus-copy-text");
copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(copyCodeContent).then(function () {
        console.log("Text copied to clipboard"), codeCopy.classList.add("copy"), copyBtn.disabled = !0, setTimeout(function () {
            codeCopy.classList.remove("copy"), copyBtn.disabled = !1
        }, 5e3)
    })
}), function () {
    var e, o = new URL(window.location.href),
        c = ["l", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "param1", "param2"];
    o.searchParams.has("redirectUrl") && 4 === (e = new URL(o.searchParams.get("redirectUrl"))).href.match(/\//g).length && e.searchParams.get("l") && localStorage.setItem("redirectUrl", e.href), c.forEach(function (e) {
        o.searchParams.has(e) && localStorage.setItem(e, o.searchParams.get(e))
    }), ["affid", "cpaid"].forEach(function (e) {
        o.searchParams.has(e) && localStorage.setItem(e, o.searchParams.get(e))
    }), window.addEventListener("click", function (e) {
        var t, a = e.target.closest("a");
        "https://tds.favbet.partners" === a.getAttribute("href") && a && (e.preventDefault(), localStorage.getItem("redirectUrl") ? t = new URL(localStorage.getItem("redirectUrl")) : (t = new URL(a.href), affid = localStorage.getItem("affid"), cpaid = localStorage.getItem("cpaid"), affid && cpaid && (t.pathname = "/" + affid + "/" + cpaid)), c.forEach(function (e) {
            o.searchParams.has(e) && t.searchParams.set(e, localStorage.getItem(e))
        }), document.location.href = t)
    })
}();