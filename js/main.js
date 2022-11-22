"use strict"


let modal = document.getElementById("overlay");
let open_modal = document.getElementById("confirm");
let close_modal = document.getElementsByClassName("modal__close")[0];
let answer = document.getElementById("answer")


function randomizer () {
    return 0 + Math.round(Math.random()) * 1  
}

function showAnswer () {
    open_modal.onclick = function() {
        let question = document.getElementById("question").value;
        
        if (typeof answer.innerText !== undefined) answer.innerText = handler() // Для IE8-
        else answer.textContent = handler() // Для нормальных браузеров

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

        modal.classList.add("modal__visible");
    }
    
    close_modal.onclick = function() {
        modal.classList.remove("modal__visible")
    }

    window.onclick = function(event) {
        if (event.target == modal) modal.classList.remove("modal__visible")
    }
}

showAnswer()