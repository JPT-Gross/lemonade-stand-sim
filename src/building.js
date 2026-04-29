/**
    * Create a class that represents buildings. These inherit Product. Buildings
    * can be purchased and generate income automatically for the player. They
    * can be purchased multiple times, but their cost increases exponentially
    * with each purchase. 
**/

class Building extends Product {
    constructor(name, baseClicksPerSecond, baseCost, thumbnail = 'media/thumbs/default_thumb.jpg'){
        super(name, baseCost, thumbnail);
        this.baseClicksPerTick = baseClicksPerSecond / (SECOND / TICK_RATE);
        this.amountOwned = 0;
        this.clicksPerTick = 0;
        this.visible = false;
        this.buildingStrength = 1;
    }

    // Create a method to double the effectiveness when the player buys an
    // upgrade
    applyDoubleUpgrade() {
        this.buildingStrength++;
        this.clicksPerTick =
            this.baseClicksPerTick * this.amountOwned * this.buildingStrength;
    }

    // Create a method for purchasing the builing
    purchase() {
        if (!super.purchase()) return false;
        this.amountOwned ++;
        this.clicksPerTick = 
            this.baseClicksPerTick * 
            this.amountOwned *
            this.buildingStrength;
        const COST_GROWTH_RATE = 1.15;
        this.cost = Math.ceil(
            this.baseCost * COST_GROWTH_RATE ** this.amountOwned
        );
        return true
    }

    // Create a method to show text on the button
    buttonState() {
        super.buttonState();

        const CLICKS_PER_SECOND = 
            this.baseClicksPerTick * 
                this.buildingStrength *
                (SECOND / TICK_RATE);

        const NET_CLICKS_PER_SECOND = 
            CLICKS_PER_SECOND *
                this.amountOwned;

        document.getElementById(this.id).innerHTML = 
            '<img class="thumbnail" src="' +
            this.thumbnail +
            '" alt="' +
            this.name +
            '">' +
            '<div class="button-text">' +
            'Buy ' +
            this.name +
            ' (Cost: $' +
            Math.ceil(this.cost).toLocaleString() +
            ')' +
            '<br> [Owned: ' +
            this.amountOwned +
            ']' +
            '<br> [Adds $' +
            CLICKS_PER_SECOND.toLocaleString() +
            ' Per Second]' + 
            '<br> [Adding $' +
            NET_CLICKS_PER_SECOND.toLocaleString() +
            ' Per Second]</div>';
    }
}