let nav = document.querySelector('.nav')

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 50) {
        nav.classList.add('op-80')
    } else {
        nav.classList.remove('op-80')
    }
})