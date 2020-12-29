import React, { useEffect, useState } from 'react';
import styles from './Pad.module.css';
import { Button } from '../../UI/Button';
import { green, red } from '@material-ui/core/colors';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Howl } from "howler";

export const Pad = ({ audioSrc, icon, globalCounter, globalCounterInit}) => {
    const soundSettings = {
        src: `./Audio/${audioSrc}`,
        format: ['mp3'],
        loop: true,
        volume: 0.2,
        autoplay: false,
    }
    const [status, setStatus] = useState(false);
    const [track, setTrack] = useState();
    const [sound, setSound] = useState(new Howl(soundSettings));

    useEffect(() => {
        if (!sound.playing() && status && globalCounter === 0) {
            const trackId = sound.play()
            setTrack(trackId);
            console.log(`start play ${trackId}`)
        }
    }, [status, globalCounter])

    const startSound = () => {
        setStatus(true);
        globalCounterInit()
    }

    const pauseSound = () => {
        setStatus(false);
        sound.pause(track)  
    }

    const stopSound = () => {
        setStatus(false);
        sound.stop(track);
    }
  

    return (
        <div className={styles.pad}>
            <div >
                <div className={styles.icon}>
                    {icon}
                </div>

                <div className={styles.buttonSection}>
                    {status ?
                        <Button clicked={pauseSound} >
                            <PauseIcon fontSize="large" style={{ color: red[600] }} />
                        </Button>
                        :
                        <Button clicked={startSound} >
                            <PlayArrowIcon fontSize="large" style={{ color: green[500] }} />
                        </Button>
                    }
                    <Button clicked={stopSound}>
                        <StopIcon fontSize="large" />
                    </Button>
                </div>

            </div>
        </div>
    );
}

