import { useState } from 'react';
import styled from 'styled-components';

const Calc = styled.div`
    text-align: center;
    padding: 10px;
    background-color: lightgray;
    border: 1px solid black;
    margin: auto;
    font-size: calc(1vw + 5px);

    @media (max-width: 750px) {
        margin: 4vw;
    }
`

export default function Calculator() {
    // Track each input and the result in state
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [result, setResult] = useState<string | number>('');

    // Common function to parse and ensure valid numbers
    function getNumbers() {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Please enter valid numbers.');
            return null;
        }
        return { num1, num2 };
    }

    // Basic operations
    function calculate(operator: string) {
        const nums = getNumbers();
        if (!nums) return; // if invalid, stop
        let calcResult: number | string;

        switch (operator) {
            case '+':
                calcResult = nums.num1 + nums.num2;
                break;
            case '-':
                calcResult = nums.num1 - nums.num2;
                break;
            case '*':
                calcResult = nums.num1 * nums.num2;
                break;
            case '/':
                if (nums.num2 === 0) {
                    calcResult = 'Error: Division by zero!';
                } else {
                    calcResult = nums.num1 / nums.num2;
                }
                break;
            default:
                calcResult = 'Unknown operation';
        }

        setResult(calcResult);
    }

    // Power function (exponent)
    function power() {
        const nums = getNumbers();
        if (!nums) return;
        const base = nums.num1;
        // secondNumber is an integer exponent
        const exponent = parseInt(secondNumber, 10);
        if (isNaN(exponent)) {
            setResult('Please enter valid numbers.');
            return;
        }

        let calcResult = 1;
        for (let i = 0; i < exponent; i++) {
            calcResult *= base;
        }

        setResult(calcResult);
    }

    function clearFields() {
        setFirstNumber('');
        setSecondNumber('');
        setResult('');
    }

    return (
        <Calc>
            <h2>Calculator</h2>
            <p>Enter two numbers and select an operation:</p>

            <label htmlFor="first-number">First Number:</label>
            <input
                type="number"
                id="first-number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
            />

            <label htmlFor="second-number">Second Number:</label>
            <input
                type="number"
                id="second-number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
            />

            <div className="buttons">
                <button onClick={() => calculate('+')}>+</button>
                <button onClick={() => calculate('-')}>-</button>
                <button onClick={() => calculate('*')}>*</button>
                <button onClick={() => calculate('/')}>/</button>
                <button onClick={power}>**</button>
                <button onClick={clearFields}>Clear</button>
            </div>

            <h3
                style={{
                    color: typeof result === 'number' && result < 0 ? 'red' : 'black',
                }}
            >
                {result}
            </h3>
        </Calc>
    );
}
