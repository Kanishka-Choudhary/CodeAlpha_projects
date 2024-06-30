document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const { num, operator: op } = button.dataset;

            if (num) {
                handleNumber(num);
            } else if (op) {
                handleOperator(op);
            }
            updateDisplay();
        });
    });

    function handleNumber(num) {
        if (currentInput.includes('.') && num === '.') return;
        currentInput += num;
    }

    function handleOperator(op) {
        switch (op) {
            case 'clear':
                currentInput = '';
                previousInput = '';
                operator = '';
                break;
            case 'equals':
                if (previousInput && currentInput) {
                    currentInput = operate(previousInput, currentInput, operator);
                    previousInput = '';
                    operator = '';
                }
                break;
            case 'decimal':
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                }
                break;
            default:
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = op;
                }
        }
    }

    function updateDisplay() {
        display.textContent = currentInput || '0';
    }

    function operate(num1, num2, op) {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        switch (op) {
            case 'add':
                return (a + b).toString();
            case 'subtract':
                return (a - b).toString();
            case 'multiply':
                return (a * b).toString();
            case 'divide':
                return (a / b).toString();
            default:
                return '0';
        }
    }
});
