// Get the input and buttons
const input = document.getElementById('number');
const buttons = document.querySelectorAll('.button, .button1');
const clearButton = document.getElementById('C-button'); // Updated to match the 'C' button ID
const deleteButton = document.getElementById('delete-button');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the button value
        const buttonText = button.innerText;

        // Handle different button actions
        switch (buttonText) {
            case 'C':
                input.value = '';
                break;
            case '=':
                try {
                    const result = eval(input.value);
                    if (isNaN(result) || !isFinite(result)) {
                        throw new Error('Invalid expression');
                    }
                    input.value = result;
                } catch (error) {
                    input.value = 'Error';
                }
                break;
            default:
                input.value += buttonText;
                break;
        }
    });
});

// Add event listener for the clear button
clearButton.addEventListener('click', () => {
    input.value = '';
});

// Add event listener for the delete button
deleteButton.addEventListener('click', () => {
    const currentValue = input.value;
    input.value = currentValue.slice(0, -1); // Remove the last character
});
