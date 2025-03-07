class Building extends Product {
    constructor(name, baseCps, baseCost) {
        super(name, baseCost);
        this.baseCps = baseCps / (1000 / tickRate);
        this.amountOwned = 0;
        this.doubleUpgrade = 0;
        this.cps = 0;
        this.visible = false;
    }

    purchase() {
        super.purchase();
        this.amountOwned++;
        this.applyDoubleUpgrade();
        this.cost = Math.ceil(this.baseCost * 1.15 ** this.amountOwned);
    }

    applyDoubleUpgrade() {
        this.cps = this.baseCps * this.amountOwned * (this.doubleUpgrade * 2);
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
                (1000 / tickRate)
            ).toLocaleString() +
            ' Per Second <br> [Owned: ' +
            this.amountOwned +
            ']';
    }
}
