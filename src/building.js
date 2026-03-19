// Create a Building class that extends the Product class, representing a
// building that generates money per tick
class Building extends Product {
    constructor(name, baseClicksPerTick, baseCost) {
        super(name, baseCost);
        this.baseClicksPerTick = baseClicksPerTick / (SECOND / TICK_RATE);
        this.amountOwned = 0;
        this.doubleUpgrade = 1;
        this.clicksPerTick = 0;
        this.visible = false;
    }

    // Override the purchase method to handle buying a building, increasing the
    // amount owned, updating the game state, applying any double upgrades, and
    // increasing the cost for the next purchase
    purchase() {
        if (!super.purchase()) return false;
        this.amountOwned++;
        gameState.buildings[this.name.toLowerCase()] = this.amountOwned;
        this.applyDoubleUpgrade();
        const COST_GROWTH_RATE = 1.15;
        this.cost = Math.ceil(
            this.baseCost * COST_GROWTH_RATE ** this.amountOwned,
        );
        return true;
    }

    // Method to apply any double upgrades to the building's clicks per tick
    applyDoubleUpgrade() {
        this.clicksPerTick =
            this.baseClicksPerTick * this.amountOwned * this.doubleUpgrade;
    }

    // Override the buttonState method to update the button's display based on
    // the current game state, including the cost, clicks per second, and amount
    // owned
    buttonState() {
        super.buttonState();

        // Calculate clicks per second for display purposes
        const CLICKS_PER_SECOND = (
            this.baseClicksPerTick *
            this.doubleUpgrade *
            (SECOND / TICK_RATE)
        ).toLocaleString();

        // Calculate net clicks per second based on the amount owned
        const NET_CLICKS_PER_SECOND = (
            CLICKS_PER_SECOND * this.amountOwned
        ).toLocaleString();

        // Update the button's inner HTML to show the building's name, cost,
        // clicks per second, total clicks per second, and amount owned
        document.getElementById(this.id).innerHTML =
            'Buy ' +
            this.name +
            ' (Cost: $' +
            Math.ceil(this.cost).toLocaleString() +
            ') <br> Adds $' +
            CLICKS_PER_SECOND +
            ' Per Second <br> Total CPS: $' +
            NET_CLICKS_PER_SECOND +
            ' <br> [Owned: ' +
            this.amountOwned +
            ']';
    }
}
