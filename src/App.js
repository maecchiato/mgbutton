import logo from './logo.svg';
import React, {useState} from "react"

import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
     <h1 className="">Button Components</h1>
     <div className="button-row">
      
      <Button
      onClick={() => alert("hello")}
      buttonStyle="btn--primary"
      buttonSize="btn--small">
        <ion-icon class="icon-right" name="heart"/>
        Button
      </Button> 

      <Button
      onClick={() => alert("hello")}
      buttonStyle="btn--secondary"
      buttonSize="btn--small">
        <ion-icon class="icon-right" name="heart"/>
        Button
      </Button> 

      <Button
      onClick={() => alert("hello")}
      buttonStyle="btn--tertiary"
      buttonSize="btn--small">
        <ion-icon class="icon-right" name="heart"/>
        Button
      </Button> 

      <Button
      onClick={() => alert("hello")}
      buttonStyle="btn--primary"
      buttonSize="btn--large">
        <ion-icon class="icon-right" name="heart"/>
        Button
      </Button> 

      <Button
      onClick={() => alert("hello")}
      buttonStyle="btn--secondary"
      buttonSize="btn--large">
        <ion-icon class="icon-right" name="heart"/>
        Button
      </Button> 


      <Button
      onClick={() => alert("hello")}
      buttonStyle="btn--tertiary"
      buttonSize="btn--large">
        <ion-icon class="icon-right" name="heart"/>
        Button
      </Button> 



     

    </div> 
    </div>
  );
}

export default App;
