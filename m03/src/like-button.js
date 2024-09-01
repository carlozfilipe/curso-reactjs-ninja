'use strict';

import React from 'react';
import Button from './button';

const LikeButton = () => (
  <Button handleClick={() => alert('BOTÃO LIKE')}>Like</Button>
);

export default LikeButton;
