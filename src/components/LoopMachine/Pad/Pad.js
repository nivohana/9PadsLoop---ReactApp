import React, { useEffect, useState } from 'react';
import styles from './Pad.module.css';
import Button from '../../UI/Button';
import { Play, Pause } from 'react-feather';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Howl } from "howler";



const Pad = (props) => {
    // Handling ON/OFF state
    const [state, setState] = useState({ status: false });

    // Handling Record state
    const [recordSound, setRecordSound] = useState({ statusRec: false });

    const handleSwitchChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        if (!event.target.checked) {
            sound.stop(myMusicID);
        }
    };



    const recordHandler = (event) =>{
        setState({ ...state, [event.target.name]: event.target.checked });
    }


    let sound = new Howl({
        src: `./Audio/${props.AudioTrack}`,
        html5: true,
        format: ['mp3'],
        loop: true,
        volume: 0.2,
    });
    var myMusicID;


    useEffect(() => {
        if (state.status) {
            myMusicID = sound.play()
        }

    }, [state])



    const startSound = () => {
        if (state.status) {
            sound.play(myMusicID)
        }
    }


    const pauseSound = () => {
        if (state.status) {
            sound.pause(myMusicID);
        }
    }


    return (
        <div className={styles.Pad}>
            <div className={styles.Buttons} >
                <div >
                    <Typography component="div">
                        <Grid component="label" container alignItems="center">
                            <Grid item>Off</Grid>
                            <Grid item>
                                <Switch
                                    label="On/Off"
                                    checked={state.status}
                                    onChange={handleSwitchChange}
                                    color="primary"
                                    name="status"
                                    inputProps={{ "aria-label": "primary checkbox" }} />

                            </Grid>
                            <Grid item>On</Grid>
                        </Grid>
                    </Typography>
                </div>
                <div style={{ margin: '10px' }}> {props.children} </div>
                <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button clicked={startSound} > <Play /> </Button>
                    <Button clicked={pauseSound}> <Pause /> </Button>
                </div>
                <Typography component="div">
                        <Grid component="label" container alignItems="center">
                            <Grid item> Rec</Grid>
                            <Grid item  >
                                <Switch
                                    label="On/Off"
                                    checked={state.statusRec}
                                    onChange={recordHandler}
                                    color="Secondary"
                                    name="statusRec"
                                    inputProps={{ "aria-label": "primary checkbox" }} />
                            </Grid>  
                        </Grid>
                    </Typography>
            </div>

        </div>
    );
}

export default Pad;