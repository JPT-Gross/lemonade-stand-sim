const TICK_RATE = 1000 / 30; // 30 FPS
const SECOND = 1000;

const gameState = {
    money: 0,
    moneyPerClick: 1,
    buildings: {
        juicer: 0,
        sugar: 0,
    },
};

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

function clickMoney() {
    gameState.money += gameState.moneyPerClick;
}

function automatedMoney() {
    gameState.money += juicer.cps;
    gameState.money += sugar.cps;
}

function renderButtons() {
    juicer.buttonState();
    sugar.buttonState();
    swoleForearms1.buttonState();
}

function renderPage() {
    automatedMoney();
    renderButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(gameState.money).toLocaleString();
}

setInterval(renderPage, TICK_RATE);
