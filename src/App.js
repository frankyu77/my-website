import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title'
import Dropdown from './components/Dropdown';
import Accordian from './components/Accordian';

function App() {
  return (
    <div className="App">
      <Title />
      <Dropdown />
      <Accordian />
    </div>
  );
}

export default App;
