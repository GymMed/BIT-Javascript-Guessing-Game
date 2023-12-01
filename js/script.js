let guessNumberInputDom = document.querySelector("#guess-number");
let guessNumberButtonDom = document.querySelector("#guess-number-btn");
let guessResultsDom = document.querySelector("#guess-results");

let guessTries = 6;
let currentGuess = 0;

const winClasses = "from-green-500 to-green-800";
const loseClasses = "from-red-500 to-red-800";

guessNumberButtonDom.addEventListener("click", function () {
    let value = guessNumberInputDom.value;
    let randomNumber = rand(1, 20);
    currentGuess++;

    if (currentGuess > guessTries) {
        return;
    }

    if (value != randomNumber) {
        lose(value, randomNumber);
    } else {
        win(value, randomNumber);
    }
});

function lose(guessValue, randomValue) {
    const winCaseClasses = winClasses.split(" ");
    removeContainedClasses(winCaseClasses, guessResultsDom);

    const loseCaseClasses = loseClasses.split(" ");
    addUncontainedClasses(loseCaseClasses, guessResultsDom);
    showHiddenDom(guessResultsDom);
    guessResultsDom.textContent = `You failed to guess.\nYour guess: ${guessValue}\nGenerated value: ${randomValue}\nTries left: ${
        guessTries - currentGuess
    }`;
}

function win(guessValue, randomValue) {
    const loseCaseClasses = loseClasses.split(" ");
    removeContainedClasses(loseCaseClasses, guessResultsDom);

    const winCaseClasses = winClasses.split(" ");
    addUncontainedClasses(winCaseClasses, guessResultsDom);
    showHiddenDom(guessResultsDom);
    guessResultsDom.textContent = `You won!\nYour guess: ${guessValue}\nGenerated value: ${randomValue}\nTries left: ${
        guessTries - currentGuess
    }`;
}

function addUncontainedClasses(array, dom) {
    if (!Array.isArray(array)) {
        console.log("Passed not array to addUncontainedClasses");
        return;
    }

    let arrayLength = array.length;

    for (let currentClass = 0; currentClass < arrayLength; currentClass++) {
        if (!dom.classList.contains(array[currentClass])) {
            dom.classList.add(array[currentClass]);
        }
    }
}

function removeContainedClasses(array, dom) {
    if (!Array.isArray(array)) {
        console.log("Passed not array to removeContainedClasses");
        return;
    }

    let arrayLength = array.length;

    for (let currentClass = 0; currentClass < arrayLength; currentClass++) {
        if (dom.classList.contains(array[currentClass])) {
            dom.classList.remove(array[currentClass]);
        }
    }
}

function showHiddenDom(dom) {
    if (dom.classList.contains("hidden")) dom.classList.remove("hidden");
}
