"use strict"

let question = document.getElementById("question")

function handler () {
    if (question.includes("Пить")) {
        return (randomizer()) ? "Пить!" : "Не пить!"
    } else if (question.includes("Бухать")) {
        return (randomizer()) ? "Бухать!" : "Не бухать!"
    } else if (question.includes("Курить")) {
        return (randomizer()) ? "Курить!" : "Курить вредно"
    } else if (question.length <= 3) {
        return "Что?"
    } else {
        return (randomizer()) ? "Да" : "Нет"
    }   
}

function randomizer () {
    return 0 + Math.round(Math.random()) * 1  
}