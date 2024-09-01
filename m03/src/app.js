'use strict';

import React, { Component } from 'react';
import LikeButton from './like-button';
import SearchButton from './search-button';
import Square from './square';
import Button from './button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: 'yellow',
    };
  }

  render() {
    return (
      <div>
        <Square color={this.state.color} />

        {['blue', 'red', 'green'].map((color) => (
          <Button key={color} handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}
      </div>
    );
  }
}

export default App;
