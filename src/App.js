import logo from './logo.svg';
import React, {useState} from "react"

import './App.css';
import { Button } from './components/Button';

function App() {

  return (
    <div className="App">
     <h1 className="">Button Components</h1>
     <div className="button-row">
      
      <Button onClick={() => {console.log("You clicked me!")}}
      type="button"
      buttonStyle="btn--primary--default"
      buttonSize="btn--large"
      >Try Here</Button>

      <Button onClick={() => {}}
      type="button"
      buttonStyle="btn--secondary--default"
      buttonSize="btn--large"
      >Try Here</Button>

      <Button onClick={() => {console.log("You clicked me!")}}
      type="button"
      buttonStyle="btn--tertiary--default"
      buttonSize="btn--large"
      > Try Here</Button>
    </div> 
    </div>
  );
}

export default App;
