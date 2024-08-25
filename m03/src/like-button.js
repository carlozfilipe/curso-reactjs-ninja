'use strict';

import React from 'react';
import Button from './button';

const LikeButton = () => (
  <Button handleClick={() => console.log('BOTÃO LIKE')}>Like</Button>
);

export default LikeButton;
