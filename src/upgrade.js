/**
    * Create a class representing all upgrades in the game. It inherits from
    * Product. An upgrade can only be purchased once and has a permenant
    * effect. The button to purchase the upgrade disappears when purchased. 
**/

class Upgrade extends Product {
    constructor(name, baseCost, thumbnail){
        super(name, baseCost, thumbnail);
        this.owned = false;
    }

    // Create a method to set owned to true when the upgrade is purchased
    purchase() {
        if (!super.purchase()) return false;
        this.owned = true;
        return true;
    }

    // Create a method to show text on the button and to delete it when it is
    // purchased
    buttonState() {
        super.buttonState();

        if (this.owned) {
            document.getElementById(this.id).style.display = 'none'
        }
    }
}