import logo from './logo.svg';
import React, {useState} from "react"

import './App.css';
import { Button } from './components/Button';
import { LinkButton } from './components/LinkButton';

export default function App() {
  const [buttons, setButtons] = useState([
    { buttonStyle:"primary", buttonSize:"small", iconName:"heart", children:"Primary" },
    { buttonStyle:"secondary", buttonSize:"small", iconName:"heart", children:"Secondary" },
    { buttonStyle:"tertiary", buttonSize:"small", iconName:"heart", children:"Tertiary" },
    { buttonStyle:"primary", buttonSize:"large", iconName:"heart", children:"Primary" },
    { buttonStyle:"secondary", buttonSize:"large", iconName:"heart", children:"Secondary" },
    { buttonStyle:"tertiary", buttonSize:"large", iconName:"heart", children:"Tertiary" },

  ])
  return (
    <div className="App">
      <h1 className="">Button Components</h1>
      <div className="button-row">   
        {buttons.map(button => (
          <Button 
          buttonStyle={button.buttonStyle} 
          buttonSize={button.buttonSize} 
          >
            <i className="bi bi-arrow-left mr-8"></i>
             {button.children}
            </Button>
        ))}
      </div>
      <div className="button-row bg-dark"> 
        <LinkButton>Link Small Light</LinkButton>
      </div>
      <div className="button-row">
        <LinkButton
        buttonBg="dark"
        buttonSize="large"
        >Link Large Dark</LinkButton>
      </div>
     
    </div>
  );
}
