const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true
    })
})

// show menu when clicked om toggle menu
let icon = document.querySelector('.toggle-menu')
let menu = document.querySelector('nav ul ')

icon.addEventListener('click', () => {
    menu.classList.toggle('show')
})


//   show video when clicked

let showVideo = document.querySelector('.Show-video')
let hiddenVideo = document.querySelector('.hidden-video')

showVideo.addEventListener('click', () => {
    hiddenVideo.style.display = 'block'
    setTimeout(() => {
        hiddenVideo.style.display = 'none'
    }, 6000)
})

// show number increase when scroll
let section = document.querySelector('.stats')
let numbers = document.querySelectorAll('.number')
let rangesSection = document.querySelector('.skills')
let ranges = document.querySelectorAll('.range')
let started = false
let started2 = false
window.onscroll = () => {
    if (window.scrollY >= section.offsetTop - 300) {
        if (!started) {
            numbers.forEach((e) => increase(e))
        }
        started = true
    }
    if (window.scrollY >= rangesSection.offsetTop - 200) {
        if (!started2) {
            ranges.forEach((range) => widthTarget(range))
        }
        started2 = true
    }

}

function increase(e) {
    let endNumber = e.dataset.num
    let inter = setInterval(() => {
        e.textContent++;
        if (e.textContent == endNumber) {
            clearInterval(inter)
        }
    }, 5 / endNumber)
}




function widthTarget(el) {
    let targetWidth = el.dataset.width
    if (targetWidth == '80%') {
        el.classList.add('animate80')
    }
    if (targetWidth == '90%') {
        el.classList.add('animate90')
    }
    el.style.width = targetWidth
}


// let  rateSection =

// window.onscroll = () => {

// }
