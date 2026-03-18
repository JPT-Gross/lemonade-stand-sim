// class representing the Swole Arms upgrade, which increases money per click
// and applies a double upgrade to a specified building
class SwoleArms extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
    }

    // Override the purchase method to handle buying the Swole Arms upgrade,
    // which increases money per click and applies a double upgrade to the
    // associated building
    purchase() {
        if (!super.purchase()) return false;
        gameState.moneyPerClick++;
        this.building.doubleUpgrade += 1;
        this.building.applyDoubleUpgrade();
        return true;
    }
}
