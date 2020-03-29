import React, { Component } from 'react';

class App extends Component {
  state = {
    number: 1,
  };

  render(): JSX.Element {
    const { number } = this.state;
    return <div>{number}</div>;
  }
}

export default App;
