let logo = document.querySelector('.land__logo');
let body = document.querySelector('body');
logo.scrollIntoView({block: "center", behavior: "smooth"});
body.classList.add('_lock')


let landStart = document.querySelector('.land__start');
let landContent = document.querySelector('.land__content');
let slides = document.querySelectorAll('.slide');



window.setTimeout(hiddenStart, 3000);

function hiddenStart(){
    landStart.classList.add('_hidden')
    landContent.classList.remove('_hidden')
    body.classList.remove('_lock')

    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide,3500);
    function nextSlide(){
        goToSlide(currentSlide+1);
    }

    function previousSlide(){
        goToSlide(currentSlide-1);
    }

    function goToSlide(n){
        slides[currentSlide].className = 'slide';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }

}

const copyCodeContent = 'FUN100';
const copyBtn = document.querySelector('.land__content-bonus-copy');
const codeCopy = document.querySelector('.land__content-bonus-copy-text');

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(copyCodeContent)
        .then(() => {
            console.log('Text copied to clipboard');
            codeCopy.classList.add('copy')
            copyBtn.disabled = true;
            setTimeout(()=>{
                codeCopy.classList.remove('copy');
                copyBtn.disabled = false;
            }, 5000)
        })
});

(function () {
    var url = new URL(window.location.href);
    var params = ['l', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'param1', 'param2'];
    var linkParams = ['affid', 'cpaid']; // ищем в url redirectUrl в url:

    if (url.searchParams.has('redirectUrl')) {
        var redirectUrl = new URL(url.searchParams.get('redirectUrl'));

        if (redirectUrl.href.match(/\//g).length === 4 && redirectUrl.searchParams.get('l')) {
            //если ссылка в ссылка redirectUrl корректная
            localStorage.setItem('redirectUrl', redirectUrl.href); // указываем точкой входа домен с протоколом из redirectUrl
        }
    } /////////


    params.forEach(function (param) {
        if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param));
    });
    linkParams.forEach(function (linkParam) {
        if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam));
    });
    window.addEventListener('click', function (e) {
        var link,
            parent = e.target.closest('a');

        if (parent.getAttribute('href') !== 'https://tds.favbet.partners') {
            return;
        }

        parent && (e.preventDefault(),
            localStorage.getItem("redirectUrl")
                ? link = new URL(localStorage.getItem("redirectUrl"))
                : (link = new URL(parent.href),
                    affid = localStorage.getItem('affid'),
                    cpaid = localStorage.getItem('cpaid'),
                affid && cpaid && (link.pathname = '/' + affid + '/' + cpaid)), params.forEach(function (param)
        {
            url.searchParams.has(param) && link.searchParams.set(param, localStorage.getItem(param));
        }), document.location.href = link);
    });
})();





