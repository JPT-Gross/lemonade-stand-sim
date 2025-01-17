const tickRate = 1000 / 30; // 30 FPS
let score = 0;

let juicer = new Building('Juicer', 0.1, 15);
let sugar = new Building('Sugar', 1, 100);

function scorePlusPlus() {
    score++;
}

function incScore() {
    score += juicer.cps;
    score += sugar.cps;
}

function updateButtons() {
    juicer.buttonState();
    sugar.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
