/**
    * Create a class for every purchasable item the the game. Every item has a
    * name, baseCost, id, and a visibility state.
**/

class Product {
    constructor(name, baseCost, thumbnail){
        this.name = name;
        this.baseCost = baseCost;
        this.cost = baseCost;
        this.thumbnail = thumbnail;
        this.id = name
            .split(' ')
            .map((word, index) =>
                index === 0
            ? word.toLowerCase()
            : word.charAt(0).toUpperCase() +
            word.slice(1).toLowerCase(),
        ).join('');
        this.visible = false;
    }

    // Create a method that checks if the player has enough money to purchase
    // the item
    purchase() {
        if (score < this.cost) return false;
        score -= this.cost;
        return true;
    }

    // Create a method that hides the button until the player can afford it,
    // then disable the button when they can no longer afford it.
    buttonState(){
        if (!this.visible){
            document.getElementById(this.id).style.display = 'none';
            if (score >= this.baseCost) {
                this.visible = true;
                document.getElementById(this.id).style.display = 'grid';
            }
        }

        if (score < this.cost){
            document.getElementById(this.id).disabled = true;
        } else {
            document.getElementById(this.id).disabled = false;
        }
    }
}