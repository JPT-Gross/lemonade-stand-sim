class SwoleArms extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
    }

    purchase() {
        if (!super.purchase()) return false;
        gameState.moneyPerClick++;
        this.building.doubleUpgrade += 1;
        this.building.applyDoubleUpgrade();
        return true;
    }
}
