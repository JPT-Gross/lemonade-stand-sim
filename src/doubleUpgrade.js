/**
    * Create a class the represents upgrades that double the effectiveness of
    * buildings. They inherit from Upgrade. The version of this upgrade that
    * affects the first building is special, it also doubles the effectiveness
    * of clicking manually. 
**/
class DoubleUpgrade extends Upgrade {
    constructor(name, cost, building, isFirstUpgrade, thumbnail = 'media/thumbs/default_thumb.jpg'){
        super(name, cost, thumbnail);
        this.building = building;
        this.isFirstUpgrade = isFirstUpgrade;
    }

    // Create a method to apply the upgrade
    purchase() {
        if (!super.purchase()) return false;
        if (this.isFirstUpgrade) {
            clickStrength *= 2;
        }
        this.building.applyDoubleUpgrade();
        return true;
    }

    // Create a method to show text on the button
    buttonState(){
        super.buttonState();

        document.getElementById(this.id).innerHTML = 
            '<img class="thumbnail" src="' +
            this.thumbnail +
            '" alt="' +
            this.name +
            '">' +
            '<div class="button-text">' +
            'Buy ' +
            this.name +
            ' (Cost: $' +
            Math.ceil(this.cost).toLocaleString() +
            ')' +
            ' <br><i>[Makes ' + 
            this.building.name +
            "s 2x effective]</i></div>";
    }
}