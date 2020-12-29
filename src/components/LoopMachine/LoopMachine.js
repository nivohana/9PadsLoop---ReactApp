import React from 'react';
import { Pads } from './Pads/Pads';
import styles from './LoopMachine.module.css';
import {Record} from '../Record/Record';

export const LoopMachine = () => {

    return (
        <div className={styles.section}>
            <h1> The Awsome Loop Machine </h1>
            <Pads />
            <div className={styles.record} >
               <Record />
            </div>
        </div>
    );
}