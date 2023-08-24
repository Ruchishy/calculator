let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateScientific(operation) {
    try {
        if (operation === 'sqrt') {
            display.value = Math.sqrt(eval(display.value));
        } else if (operation === 'pow') {
            display.value = Math.pow(eval(display.value), 2);
        }
    } catch (error) {
        display.value = 'Error';
    }
}
