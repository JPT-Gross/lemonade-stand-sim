const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 0;

let juicer = new Building('Juicer', 0.1, 15);
createButton(juicer, 'buildingStore');
let sugar = new Building('Sugar', 1, 100);
createButton(sugar, 'buildingStore');

let swoleForearms1 = new SwoleArms('Swole Forearms I', 100, juicer);
createButton(swoleForearms1, 'upgradeStore');

function createButton(object, div) {
    const button = document.createElement('button');
    button.id = object.buttonId;
    button.classList.add('button');
    button.addEventListener('click', function () {
        object.purchase();
    });
    document.getElementById(div).appendChild(button);
}

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += juicer.cps;
    score += sugar.cps;
}

function updateButtons() {
    juicer.buttonState();
    sugar.buttonState();
    swoleForearms1.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
