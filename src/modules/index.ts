// Declare the required elements
const display = document.querySelector(".display") as HTMLInputElement;
const numberButtons = document.querySelectorAll(
  "[data-number]"
) as NodeListOf<HTMLButtonElement>;
const operatorButtons = document.querySelectorAll(
  "[data-operator]"
) as NodeListOf<HTMLButtonElement>;
const equalsButton = document.querySelector(".equals") as HTMLButtonElement;
const clearButton = document.querySelector(".clear") as HTMLButtonElement;

// Initialize variables to store operands and operator
let firstOperand: number | null = null;
let secondOperand: number | null = null;
let currentOperator: string | null = null;

// Add event listeners for number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Append the clicked number button's text content to the display value
    display.value += button.textContent;
  });
});

// Add event listeners for operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // If the current operator is null, set the current operator to the clicked operator
    if (!firstOperand) {
      // Append the clicked operator's text content to the display value
      firstOperand = parseFloat(display.value);
      currentOperator = button.textContent;
      //Clear the display value
      display.value = "";
    }
  });
});

// Add event listener for equals button
equalsButton.addEventListener("click", () => {
  // Check if the first operand and current operator are set
  if (!firstOperand || !currentOperator) return;
  // Set the second operand from the display value
  secondOperand = parseFloat(display.value);
  let result: number;

  // Perform the calculation based on the current operator
  switch (currentOperator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;

    case "/":
      // Check for division by zero
      if (secondOperand === 0) {
        alert("Division by zero is not allowed!");
        return;
      }
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }
  // Display the result and reset the variables
  display.value = result.toString();
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
});

// Add event listener for clear button
clearButton.addEventListener("click", () => {
  // Clear the display value and reset the variables
  display.value = "";
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
});
