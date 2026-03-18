class SwoleArms extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
    }

    purchase() {
        super.purchase();
        gameState.moneyPerClick++;
        this.building.doubleUpgrade += 2;
        this.building.applyDoubleUpgrade();
    }
}
