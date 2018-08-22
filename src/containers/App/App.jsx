import React from 'react';
import './App.css';
import Parser from '../Parser';
import * as directions from '../Parser/directions';

const App = () => (
  <div className="App">
    <h1 className="App-title">Himalaya online</h1>
    <Parser direction={directions.HTML_TO_JSON} />
    <Parser direction={directions.JSON_TO_HTML} />
  </div>
);

export default App;
