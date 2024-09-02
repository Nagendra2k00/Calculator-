import React from 'react';
import './Global.css';

const Button = ({ label, onClick, type, spanTwo }) => {
  const classNames = [
    'button-wrapper',
    type === 'operator' ? 'operator' : '',
    type === 'function' ? 'function' : '',
    type === 'equals' ? 'equals' : '',
    spanTwo ? 'span-two' : '',
  ].join(' ');

  return (
    <button onClick={onClick} className={classNames}>
      {label}
    </button>
  );
};

export default Button;