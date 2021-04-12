import logo from './logo.svg';
import React, {useState} from "react"

import './App.css';
import { Button } from './components/Button';
import { LinkButton } from './components/LinkButton';

export default function App() {
  const [buttons, setButtons] = useState([
    { buttonStyle:"btn--primary", buttonSize:"btn--small", iconName:"heart", children:"Primary" },
    { buttonStyle:"btn--secondary", buttonSize:"btn--small", iconName:"heart", children:"Secondary" },
    { buttonStyle:"btn--tertiary", buttonSize:"btn--small", iconName:"heart", children:"Tertiary" },
    { buttonStyle:"btn--primary", buttonSize:"btn--large", iconName:"heart", children:"Primary" },
    { buttonStyle:"btn--secondary", buttonSize:"btn--large", iconName:"heart", children:"Secondary" },
    { buttonStyle:"btn--tertiary", buttonSize:"btn--large", iconName:"heart", children:"Tertiary" },

  ])
  return (
    <div className="App">
      <h1 className="">Button Components</h1>
      <div className="button-row">   
        {buttons.map(button => (
          <Button 
          buttonStyle={button.buttonStyle} 
          buttonSize={button.buttonSize} 
          iconName={button.iconName} 
          children={button.children} />
        ))}
      </div>
      <div className="button-row bg-dark"> 
        <LinkButton>Link Small Light</LinkButton>
      </div>
      <div className="button-row">
        <LinkButton
        buttonBg="linkbtn--dark"
        buttonSize="linkbtn--large"
        >Link Large Dark</LinkButton>
      </div>
     
    </div>
  );
}
