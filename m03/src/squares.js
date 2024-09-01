'use strict';

import React from 'react';
import Square from './square';

const RenderSquares = () => (
  <div
    onClick={(e) => {
      alert('clicou na div');
    }}
  >
    {['blue', 'yellow', 'black', 'blue'].map((square, index) => (
      <Square key={index} color={square} />
    ))}
  </div>
);

export default RenderSquares;
