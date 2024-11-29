import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css'; 

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setInput(''); 
    } else if (value === '=') {
      try {
        const result = evaluate(input); 
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value); 
    }
  };

  const renderButton = (value: string) => (
    <button
      key={value}
      className="calculator-button"
      onClick={() => handleButtonClick(value)}
    >
      {value}
    </button>
  );

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', 'C', '+',
    '='
  ];

  return (
    <div className="calculator">
      <input className="calculator-display" type="text" value={input} readOnly />
      <div className="calculator-buttons">
        {buttons.map(renderButton)}
      </div>
    </div>
  );
};

export default Calculator;
