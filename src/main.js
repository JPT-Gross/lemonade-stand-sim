const TICK_RATE = 1000 / 30; // Define a constant for the tick rate (30 times per second)
const SECOND = 1000; // Define a constant for one second in milliseconds

// Define the initial game state, including money, money per click, buildings
// owned, and upgrades owned
const gameState = {
    money: 0,
    moneyPerClick: 1,
    buildings: {
        juicer: 0,
        sugar: 0,
    },
    upgrades: {
        swoleForearms1: false,
    },
};

// Create instances of buildings and upgrades, and create buttons for them
let juicer = new Building('Juicer', 0.1, 15);
createButton(juicer, 'buildingStore');
let sugar = new Building('Sugar', 1, 100);
createButton(sugar, 'buildingStore');
let swoleForearms1 = new SwoleArms('Swole Forearms 1', 100, juicer);
createButton(swoleForearms1, 'upgradeStore');

// Function to create a button for a given object (building or upgrade) and
// append it to a specified div
function createButton(object, div) {
    const button = document.createElement('button');
    button.id = object.id;
    button.classList.add('button');
    button.addEventListener('click', function () {
        object.purchase();
    });
    document.getElementById(div).appendChild(button);
}

// Function to handle clicking the main money button, which increases money by
// the amount of money per click
function clickMoney() {
    gameState.money += gameState.moneyPerClick;
}

// Function to automate money generation based on the clicks per tick of owned buildings
function automatedMoney() {
    gameState.money += juicer.clicksPerTick + sugar.clicksPerTick;
    // Ensure money doesn't go negative
    gameState.money = Math.max(gameState.money, 0);
}

// Function to update the state of all buttons based on the current game state
function renderButtons() {
    juicer.buttonState();
    sugar.buttonState();
    swoleForearms1.buttonState();
}

// Function to render the page, including automated money generation, button
// states, and displaying the current amount of money
function renderPage() {
    automatedMoney();
    renderButtons();
    document.getElementById('money').innerHTML =
        '$' + Math.floor(gameState.money).toLocaleString();
}

// Set an interval to call the renderPage function at the defined tick rate
setInterval(renderPage, TICK_RATE);
