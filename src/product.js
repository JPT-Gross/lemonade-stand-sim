// Create a Product class that represents a purchasable item in the game, with
// properties for name, base cost, current cost, button ID, and visibility
class Product {
    constructor(name, baseCost) {
        this.name = name;
        this.baseCost = baseCost;
        this.cost = baseCost;
        // Convert name to camelCase: split by space, lowercase first word, capitalize subsequent words
        this.id = name
            .split(' ')
            .map((word, index) =>
                index === 0
                    ? word.toLowerCase()
                    : word.charAt(0).toUpperCase() +
                      word.slice(1).toLowerCase(),
            )
            .join('');
        this.visible = false;
    }

    // Method to handle purchasing the product, checking if the player has
    // enough money and deducting the cost if the purchase is successful
    purchase() {
        if (gameState.money < this.cost) return false;
        gameState.money -= this.cost;
        return true;
    }

    // Method to update the state of the product's button based on the current
    // game state, including visibility and whether the player can afford it
    buttonState() {
        if (!this.visible) {
            document.getElementById(this.id).style.display = 'none';
            if (gameState.money >= this.baseCost) {
                this.visible = true;
                document.getElementById(this.id).style.display = 'initial';
            }
        }
        // Disable the button if the player cannot afford the product, and
        // enable it if they can
        if (gameState.money < this.cost) {
            document.getElementById(this.id).disabled = true;
        } else {
            document.getElementById(this.id).disabled = false;
        }
    }
}
