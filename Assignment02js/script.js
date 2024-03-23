// JavaScript for smoothie order form

// Smoothie class
class Smoothie {
    constructor(flavor, size, toppings) {
        this.flavor = flavor;
        this.size = size;
        this.toppings = toppings;
    }

    getDescription() {
        return `You ordered a ${this.size} ${this.flavor} smoothie with ${this.toppings.join(', ')}.`;
    }
}

// Function to handle form submission
document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    submitOrder();
});

// Function to handle order button click
document.getElementById('orderButton').addEventListener('click', function(event) {
    submitOrder();
});

// Function to create smoothie object and display description
function submitOrder() {
    // Get form values
    const flavor = document.getElementById('flavor').value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(input => input.value);

    // Create smoothie object
    const smoothie = new Smoothie(flavor, size, toppings);

    // Display smoothie description
    document.getElementById('smoothieDescription').textContent = smoothie.getDescription();
}
