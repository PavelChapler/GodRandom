"use strict"

let question

function handler () {
    if (question.includes("Пить")) {
        return (randomizer()) ? "Пить" : "Не пить"
    } else if (question.includes("Бухать")) {
        return (randomizer()) ? "Бухать" : "Не бухать"
    } else if (question.includes("Курить")) {
        return (randomizer()) ? "Курить" : "Курить вредно"
    } else {
        return (randomizer()) ? "Да" : "Нет"
    }   
}

function randomizer () {
    return 0 + Math.round(Math.random()) * 1  
}