class Building extends Product {
    constructor(name, baseCps, baseCost) {
        super(name, baseCost);
        this.baseCps = baseCps / (SECOND / TICK_RATE);
        this.amountOwned = 0;
        this.doubleUpgrade = 1;
        this.cps = 0;
        this.visible = false;
    }

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

    applyDoubleUpgrade() {
        this.cps = this.baseCps * this.amountOwned * this.doubleUpgrade;
    }

    buttonState() {
        super.buttonState();

        document.getElementById(this.buttonId).innerHTML =
            'Buy ' +
            this.name +
            ' (Cost: $' +
            Math.ceil(this.cost).toLocaleString() +
            ') <br> Adds $' +
            (
                this.baseCps *
                this.doubleUpgrade *
                (SECOND / TICK_RATE)
            ).toLocaleString() +
            ' Per Second <br> [Owned: ' +
            this.amountOwned +
            ']';
    }
}
