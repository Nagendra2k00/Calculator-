import React, { useState } from 'react';
import "./Global.css"
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const operators = ['/', '*', '-', '+'];

  const updateExpression = (value) => {
    if (
      (operators.includes(value) && expression === '') ||
      (operators.includes(value) && operators.includes(expression.slice(-1)))
    ) {
      return;
    }
    setExpression(expression + value);
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(expression);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearExpression = () => {
    setExpression('');
    setResult('');
  };

  const deleteLast = () => {
    setExpression(expression.slice(0, -1));
  };

  return (
    <div className='CalculatorWrapper'>
      <Display expression={expression} result={result} />
      <div className='ButtonsGrid'>
        <Button onClick={clearExpression} label="C" type="function" />
        <Button onClick={deleteLast} label="DEL" type="function" />
        <Button onClick={() => updateExpression('/')} label="÷" type="operator" />
        <Button onClick={() => updateExpression('*')} label="×" type="operator" />

        <Button onClick={() => updateExpression('7')} label="7" />
        <Button onClick={() => updateExpression('8')} label="8" />
        <Button onClick={() => updateExpression('9')} label="9" />
        <Button onClick={() => updateExpression('-')} label="−" type="operator" />

        <Button onClick={() => updateExpression('4')} label="4" />
        <Button onClick={() => updateExpression('5')} label="5" />
        <Button onClick={() => updateExpression('6')} label="6" />
        <Button onClick={() => updateExpression('+')} label="+" type="operator" />

        <Button onClick={() => updateExpression('1')} label="1" />
        <Button onClick={() => updateExpression('2')} label="2" />
        <Button onClick={() => updateExpression('3')} label="3" />
        <Button onClick={() => updateExpression('.')} label="." />
        <Button onClick={calculateResult} label="=" type="equals" spanTwo />

        <Button onClick={() => updateExpression('0')} label="0" spanTwo />
        
      </div>
    </div>
  );
};

export default Calculator;
