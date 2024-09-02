// src/components/Display.js
import React from 'react';
import styled from 'styled-components';

const Display = ({ expression, result }) => {
  return (
    <div className='DisplayWrapper'>
      <div className='ResultText'>{result ? result : '0'}</div>
      {expression || '0'}
    </div>
  );
};

export default Display;
