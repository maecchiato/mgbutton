import React from 'react';
import '../styles/component-styles/linkbutton.css'

//-----array of styles
const BACKGROUNDS = [
    "linkbtn--light",
    "linkbtn--dark",  
];

//-----array of sizes
const SIZES = [
    "linkbtn--small",
    "linkbtn--large",
];

export const LinkButton = ({
    children,
    href,
    buttonBg,    
    buttonSize
}) => { 
    //-----checks if the style is included in the array and if not, fallbacks to the first value in the list
    const checkButtonBg = BACKGROUNDS.includes(buttonBg) ? buttonBg : BACKGROUNDS[0];

    //-----checks if the size is included in the array and if not, fallbacks to the first value in the list
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
   
    return (
        // <div className="link-btn">
        //     <div>
        //         <a className={`a ${checkButtonBg} ${checkButtonSize}`}
        //         href={href}>{children}</a>
        //     </div>
            
        // </div>

        <div className={`link-btn ${checkButtonBg} ${checkButtonSize}`}>
          <a className="" href="#">{children}</a>
        </div>
    )
};
