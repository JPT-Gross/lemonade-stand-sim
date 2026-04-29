const TICK_RATE = 30; // Define a constant for how fast the screen updates
const SECOND = 1000;  // Define a constant for 1 second in millis
let score = 70500;        // Create a variable for the score

// Create a variable for how many clicks we get from buildings
let clicksPerTick = 0;
// Create a variable for how many clicks we get when we click the button
let clickStrength = 1;

// Create a function for getting points when we click the button
function scoreGoUp(){
    score += 1 * clickStrength;
}

// Instantiate the Buildings
// TODO: Change these to match your theme
let juicer = new Building("Juicer", 0.1, 15, 'media/thumbs/juicer.png');
createButton(juicer, 'buildingStore');
let sugar = new Building("Sugar", 1, 100);
createButton(sugar, 'buildingStore');
let ice = new Building("Ice", 8, 1100);
createButton(ice, 'buildingStore');

// Instantiate the Upgrades
// TODO: Change these to match your theme
let swoleArms1 = new DoubleUpgrade('Swole Arms 1', 100, juicer, true);
createButton(swoleArms1, 'upgradeStore');
let swoleArms2 = new DoubleUpgrade('Swole Arms 2', 750, juicer, true);
createButton(swoleArms2, 'upgradeStore');
let swoleArms3 = new DoubleUpgrade('Swole Arms 3', 7500, juicer, true);
createButton(swoleArms3, 'upgradeStore');
let refinedSugar = new DoubleUpgrade('Refined Sugar', 500, sugar, false);
createButton(refinedSugar, 'upgradeStore');
let sugarCubes = new DoubleUpgrade('Sugar Cubes', 5000, sugar, false);
createButton(sugarCubes, 'upgradeStore');
let sonicIce = new DoubleUpgrade('Sonic Ice', 11000, ice, false);
createButton(sonicIce, 'upgradeStore');
let cooler = new DoubleUpgrade('Cooler', 55000, ice, false);
createButton(cooler, 'upgradeStore');

// Create a function to update the buttons every tick
// TODO: Change these to match your theme
function renderButtons(){
    juicer.buttonState();
    sugar.buttonState();
    ice.buttonState();
    swoleArms1.buttonState();
    swoleArms2.buttonState();
    swoleArms3.buttonState();
    refinedSugar.buttonState();
    sugarCubes.buttonState();
    sonicIce.buttonState();
    cooler.buttonState();
}

// Create a function to update the score every tick
// TODO: Change this to match your theme
function renderScore(){
    clicksPerTick = 
        juicer.clicksPerTick + 
        sugar.clicksPerTick +
        ice.clicksPerTick;

    score += clicksPerTick;

    document.getElementById("score").innerHTML = '$' + 
        Math.floor(score).toLocaleString();
}

// Create a function to create html buttons automatically
function createButton(object, div){
    const button = document.createElement('button');
    button.id = object.id;
    button.classList.add('button');
    button.addEventListener('pointerdown', function(e){
        e.preventDefault();
        object.purchase();
    });
    document.getElementById(div).appendChild(button);
}

// Create a function to update the page
function renderPage(){
    renderButtons();
    renderScore();
}

// Update the page
renderPage();
setInterval(renderPage, TICK_RATE);