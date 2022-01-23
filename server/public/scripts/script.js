const btnMenuToggle = document.getElementById('menu-toggle'),
    btnCloseMenu = document.getElementById('btnCloseMenu'),
    btnSubmenu = document.getElementById('btn-open-submenu'),
    menu = document.getElementById('menu-mobile-container'),
    submenu = document.getElementById('menu-mobile__subitems-container'),
    login = document.getElementById('login')

window.onresize = () => {

    let largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (largura >= 768) {
        login.classList.remove('underline-text')
        login.classList.add('header__items--bcg')
    } else {
        login.classList.add('underline-text')
        login.classList.remove('header__items--bcg')
    }

}

btnMenuToggle.addEventListener('click', () => {
    menu.classList.remove('element-hidden')
})

btnCloseMenu.addEventListener('click', () => {
    menu.classList.add('element-hidden')
})

btnSubmenu.addEventListener('click', () => {
    submenu.classList.toggle('element-hidden')
})