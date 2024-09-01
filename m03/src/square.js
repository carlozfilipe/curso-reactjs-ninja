'use strict';

import React from 'react';

/**
 * @param {string} color - Cor do quadrado (ex: red, blue, green).
 */

const Square = ({ color }) => (
  <div
    style={{
      backgroundColor: color,
      height: '100px',
      width: '100px',
    }}
  />
);

Square.defaultProps = {
  color: 'red',
};

export default Square;
