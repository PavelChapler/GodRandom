"use strict"


let base = document.getElementsByTagName('body')[0];
let open_modal = document.getElementById("confirm");
let answer = document.getElementById("answer");


function randomizer () {
    return 0 + Math.round(Math.random()) * 1  
}

function showAnswer () {
    open_modal.onclick = function() {
        let question = document.getElementById("question").value;
        question = question.toLowerCase();
        let mainWord = getMainWord();
        
        function getMainWord () {
            let suffix;
                if (question.includes("ть")) suffix = question.indexOf("ть") + 2;
                if (question.includes("ся")) suffix = question.indexOf("ся") + 2;
                if (question.includes("ти")) suffix = question.indexOf("ти") + 2;
            let stroke = question.slice(0, suffix);
            let words = stroke.split(" ");
            return words.pop();
        }
        
        if (typeof answer.innerText !== undefined) answer.innerText = handler() // Для IE8-
        else answer.textContent = handler() // Для нормальных браузеров

        function handler () {
            if (mainWord.length > 1) {
                return (randomizer()) ? (mainWord[0].toUpperCase() + mainWord.slice(1) + "!") : (`Не ${mainWord}`)
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

            window.setTimeout(function () { // Чтобы анимация закрытия успела проиграться
                base.classList.remove("modal__active");
            }, 500)
        }
    }
}

showAnswer()