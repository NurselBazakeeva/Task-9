let input = document.querySelector("input");
let guessBtn = document.querySelector("#guess-btn");
let message = document.querySelector(".message");
let innerB = document.querySelector(".inner");

let random = Math.floor(10 * Math.random()) + 1;
count = 2;

guessBtn.addEventListener("click", function () {

    if (input.value == random) {
        input.style.border = "3px solid green";
        message.style.color = "green";
        message.style.fontSize = "25px";
        message.textContent = "Bы выиграли! Так держать!";
        let newGame = guessBtn.textContent = "Новая игра";

        if (newGame) {
            guessBtn.addEventListener("click", function () {
                location.reload();
            })
        }
    }
    else {
        input.style.border = "3px solid red";
        message.style.color = "red";
        message.textContent = "Вы не угадали: осталось попыток " + count;
        input.value = "";
    }

    count = count - 1;
    if (count == -1 && input.value != random) {
        message.textContent = "Вы проиграли.  Было загадано чиcло :" + random;
        guessBtn.textContent = "Новая игра";
        guessBtn.addEventListener("click", function () {
            location.reload();
        })
    }
})

