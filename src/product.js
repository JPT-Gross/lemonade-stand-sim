class Product {
    constructor(name, baseCost) {
        this.name = name;
        this.baseCost = baseCost;
        this.cost = baseCost;
        this.buttonId = 'buy' + name.replace(/\s/g, '');
        this.visible = false;
    }

    purchase() {
        score -= this.cost;
    }

    buttonState() {
        if (!this.visible) {
            document.getElementById(this.buttonId).style.display = 'none';
            if (score >= this.baseCost) {
                this.visible = true;
                document.getElementById(this.buttonId).style.display =
                    'initial';
            }
        }

        if (score < this.cost) {
            document.getElementById(this.buttonId).disabled = true;
        } else {
            document.getElementById(this.buttonId).disabled = false;
        }
    }
}
