// Array of background colors to cycle through
const colors = ['#ff5733', '#33ff57', '#5733ff', '#33a0ff', '#ff33a0'];

const container = document.querySelector('.container');
const button = document.getElementById('changeColorButton');

let currentIndex = 0;

// Function to change the background color
function changeBackgroundColor() {
    container.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

// Add a click event listener to the button
button.addEventListener('click', changeBackgroundColor);
