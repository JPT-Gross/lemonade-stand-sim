class Upgrade extends Product {
    constructor(name, baseCost) {
        super(name, baseCost);
        this.cost = baseCost;
        this.owned = false;
    }

    purchase() {
        if (!super.purchase()) return false;
        this.owned = true;
        return true;
    }

    buttonState() {
        super.buttonState();

        if (this.owned) {
            document.getElementById(this.buttonId).style.display = 'none';
        }

        document.getElementById(this.buttonId).innerHTML =
            'Buy ' +
            this.name +
            ' (Cost: $' +
            Math.ceil(this.cost).toLocaleString() +
            ')';
    }
}
