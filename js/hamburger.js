// open/close hamburger menu

const MAX_VW = 720
let isUnfolded = false

const menu = document.querySelector(`#main-menu`)
    , button = document.querySelector(`#hamburger-menu-button`)
    , buttonimg = button.querySelector(`img`)

function toggleMenu(mode) {
    let shouldUnfold
    if (mode === `toggle`) {
        shouldUnfold = !menu.classList.contains(`unfolded`)
    } else {
        shouldUnfold = !!mode
        menu.classList.toggle(`unfolded`)
        button.classList.toggle(`unfolded`)
    }

    if (shouldUnfold) {
        button.setAttribute(`aria-label`, `Close`)
        buttonimg.setAttribute(`src`, `/udct1-fake-blog/assets/close.svg`)
        menu.classList.add(`unfolded`)
        button.classList.add(`unfolded`)
    } else {
        button.setAttribute(`aria-label`, `Menu`)
        buttonimg.setAttribute(`src`, `/udct1-fake-blog/assets/menu.svg`)
        menu.classList.remove(`unfolded`)
        button.classList.remove(`unfolded`)
    }
    isUnfolded = shouldUnfold
}

button.onclick = () => toggleMenu(`toggle`)

window.onresize = () => {
    if (isUnfolded && window.innerWidth >= MAX_VW) {
        toggleMenu(false)
    }
}
