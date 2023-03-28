const display = document.getElementById('display') as HTMLInputElement;
const numberButtons = document.querySelectorAll('[data-number]') as NodeListOf<HTMLButtonElement>;
const operatorButtons = document.querySelectorAll('[data-operator]') as NodeListOf<HTMLButtonElement>;
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
const clearButton = document.getElementById('clear') as HTMLButtonElement;

let firstOperand: number | null=null;
let secondOperand: number |null = null;
let operator:string |null = null;

//Add event listeners for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});

//Add event listeners for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});

//Add event listeners for equals button
equalsButton.addEventListener('click', () => {
    if(firstOperand!== null && secondOperand!== null && operator!== null) {
        display.value = eval(display.value);
    }
});

//Add event listeners for clear button
clearButton.addEventListener('click', () => {
    display.value = '';
    firstOperand = null;
    secondOperand = null;
    operator = null;
});

