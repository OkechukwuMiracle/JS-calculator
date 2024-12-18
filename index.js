// CALCULATOR PROGRAM

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = ''
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = 'syntax error';
    }
}

document.getElementById('light').addEventListener('click', toggleLight);

function toggleLight() {
    document.body.classList.toggle('light');
}