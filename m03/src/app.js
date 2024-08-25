'use strict';

import React, { Component } from 'react';
import LikeButton from './like-button';
import SearchButton from './search-button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Estado inicial',
    };
  }

  render() {
    return (
      <div onClick={() => this.setState({ text: 'Segundo estado' })}>
        {this.state.text}
      </div>
    );
  }
}

export default App;
