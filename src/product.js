class Product {
    constructor(name, baseCost) {
        this.name = name;
        this.baseCost = baseCost;
        this.cost = baseCost;
        this.buttonId = 'buy' + name.replace(/\s/g, '');
        this.visible = false;
    }

    purchase() {
        if (gameState.money < this.cost) return false;
        gameState.money -= this.cost;
        return true;
    }

    buttonState() {
        if (!this.visible) {
            document.getElementById(this.buttonId).style.display = 'none';
            if (gameState.money >= this.baseCost) {
                this.visible = true;
                document.getElementById(this.buttonId).style.display =
                    'initial';
            }
        }

        if (gameState.money < this.cost) {
            document.getElementById(this.buttonId).disabled = true;
        } else {
            document.getElementById(this.buttonId).disabled = false;
        }
    }
}
