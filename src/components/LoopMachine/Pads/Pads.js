import React, { useState, useEffect } from 'react';
import styles from './Pads.module.css';
import { Pad } from '../Pad/Pad';
import * as Icon from 'react-feather';



export const Pads = () => {
    const SOUND_INTERVAL = 1000;
    const CYCELS_LIMIT = 8;
    const pads = [
        { id: '1', icon: <Icon.Speaker size={'35px'} />, audio: '120_future_funk_beats_25.mp3' },
        { id: '2', icon: <Icon.Radio size={'35px'} />, audio: '120_stutter_breakbeats_16.mp3' },
        { id: '3', icon: <Icon.Rss size={'35px'} />, audio: 'Bass Warwick heavy funk groove on E 120 BPM.mp3' },
        { id: '4', icon: <Icon.Star size={'35px'} />, audio: 'electric guitar coutry slide 120bpm - B.mp3' },
        { id: '5', icon: <Icon.Target size={'35px'} />, audio: 'FUD_120_StompySlosh.mp3' },
        { id: '6', icon: <Icon.Mic size={'35px'} />, audio: 'GrooveB_120bpm_Tanggu.mp3' },
        { id: '7', icon: <Icon.Music size={'35px'} />, audio: 'MazePolitics_120_Perc.mp3' },
        { id: '8', icon: <Icon.Bell size={'35px'} />, audio: 'PAS3GROOVE1.03B.mp3' },
        { id: '9', icon: <Icon.Volume size={'35px'} />, audio: 'SilentStar_120_Em_OrganSynth.mp3' },
    ]

    const [globalCounter, setGlobalCounter] = useState(0)
    const [intervalId, setIntervalId] = useState(null)
    const [intervalStatus, setIntervalStatus] = useState(true)

    useEffect(() => {
        checkMaxInterval(globalCounter)
        console.log(globalCounter)
    },[globalCounter])

    const checkMaxInterval = (globalCounter) => {
        if (globalCounter === CYCELS_LIMIT) {
            setGlobalCounter(0)
        }
    }

    const globalCounterInit = () => {
        if (intervalStatus) {
            setIntervalStatus(false);
            setInterval(() => {
                setGlobalCounter(globalCounter => globalCounter + 1)
            }, SOUND_INTERVAL)
        }
    }

    return (
        <div>
            <div className={styles.pads}>
                {pads.map(pad => <Pad
                    key={pad.id}
                    audioSrc={pad.audio}
                    icon={pad.icon}
                    setIntervalStatus={setIntervalStatus}
                    globalCounterInit={globalCounterInit}
                    globalCounter={globalCounter} />)}
            </div>
        </div>
    );
}

