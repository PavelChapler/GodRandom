"use strict"


let base = document.getElementsByTagName('body')[0];
let open_modal = document.getElementById("confirm");
let answer = document.getElementById("answer")


function randomizer () {
    return 0 + Math.round(Math.random()) * 1  
}

function showAnswer () {
    open_modal.onclick = function() {
        let question = document.getElementById("question").value;
        question = question.toLowerCase();
        
        if (typeof answer.innerText !== undefined) answer.innerText = handler() // Для IE8-
        else answer.textContent = handler() // Для нормальных браузеров

        function handler () {
            if (question.includes("пить")) {
                return (randomizer()) ? "Пить!" : "Не пить!"
            } else if (question.includes("бухать")) {
                return (randomizer()) ? "Бухать!" : "Не бухать!"
            } else if (question.includes("курить")) {
                return (randomizer()) ? "Курить!" : "Курить вредно"
            } else if (question.length <= 4) {
                return "Что?"
            } else {
                return (randomizer()) ? "Да" : "Нет"
            }   
        }

        base.classList.remove("out");
        base.classList.add("modal__active");
    }

    window.onclick = function(event) {
        if (event.target == document.getElementById("overlay")) {
            base.classList.add("out");
            window.setTimeout(function () {
                base.classList.remove("modal__active");
            }, 500)
        }
    }
}

showAnswer()