const logo = document.querySelector('.land__logo');
logo.scrollIntoView({block: "center", behavior: "smooth"});

let body = document.querySelector('body')
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
})




