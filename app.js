let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');
let black = document.querySelector('.black');
let purple = document.querySelector('.purple');
let orange = document.querySelector('.orange');
let clear = document.querySelector('.clear');



function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

red.addEventListener('click', () => {
    changeBackgroundColor('red')
    })


blue.addEventListener('click', () => {
    changeBackgroundColor('blue')
    })

green.addEventListener('click', () => {
    changeBackgroundColor('green')
    })

orange.addEventListener('click', () => {
    changeBackgroundColor('orange')
    })

purple.addEventListener('click', () => {
    changeBackgroundColor('purple')
    })

black.addEventListener('click', () => {
    changeBackgroundColor('black')
    })

clear.addEventListener('click', () => {
    changeBackgroundColor('')
    })





