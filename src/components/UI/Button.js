import React, { useState } from 'react';
import styles from './Button.module.css';


const Button = (props) => {
    // const [currentState , setCurrentState] = useState(false);

    // const stateHandler = () =>{
    //     setCurrentState( prevState => !prevState);
    // }


    return (
        <button onClick={props.clicked}>
            {props.children}
        </button>
    );

}


export default Button;