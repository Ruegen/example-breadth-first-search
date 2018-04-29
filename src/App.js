import React, { Component } from 'react';
import './App.css';
import BreadthFirstSearch from './components/BreadthFirstSearch'

class App extends Component {

  state = {
    graphMatrix: [
      [0,1,1,1,0],
      [0,0,1,0,0],
      [1,1,0,0,0],
      [0,0,0,1,0],
      [0,1,0,0,0],
    ],
    rootNode: 1
  }

  render() {
    return (
      <div className="App">
        <BreadthFirstSearch 
          graphMatrix={this.state.graphMatrix}
          rootNode={this.state.rootNode}
        />
      </div>
    );
  }
}

export default App;
