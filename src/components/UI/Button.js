import React from 'react';
import styles from './Button.module.css';


export const Button = ({clicked, children}) => {
    return (
        <button className={styles.Button}
            onClick={clicked}>
            {children}
        </button>
    );

}


