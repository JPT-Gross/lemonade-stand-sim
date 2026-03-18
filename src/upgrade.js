// Class representing an upgrade in the game, which can be purchased once to
// provide a permanent benefit
class Upgrade extends Product {
    constructor(name, baseCost) {
        super(name, baseCost);
        this.cost = baseCost;
        this.owned = false;
    }

    // Override the purchase method to handle buying an upgrade, marking it as
    // owned and updating the game state accordingly
    purchase() {
        if (!super.purchase()) return false;
        this.owned = true;
        gameState.upgrades[this.id] = true;
        return true;
    }

    // Override the buttonState method to update the button's display based on
    // the current game state, including visibility and whether the upgrade has
    // already been purchased
    buttonState() {
        super.buttonState();

        if (this.owned) {
            document.getElementById(this.id).style.display = 'none';
        }

        document.getElementById(this.id).innerHTML =
            'Buy ' +
            this.name +
            ' (Cost: $' +
            Math.ceil(this.cost).toLocaleString() +
            ')';
    }
}
