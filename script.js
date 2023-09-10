'use strict'

function asking() {

const randomNum = [Math.floor(Math.random() * 100)]

    function findNumber(){
        const number = prompt("Угадай число от 1 до 100")
    if (number === null){
        alert("Игра закончена")
        findNumber()
    }
    else if (number < randomNum){
        alert("Загаданное число больше")
        findNumber()
    }
    else if (isNaN(number)) {
        alert("Введи число!")
        findNumber()
    }
    else if (number > randomNum){
        alert("Загаданное число меньше")
        findNumber()
    }
    else {
        alert("Поздравляю Вы угадали!");
    }
}
findNumber()
}
asking()
