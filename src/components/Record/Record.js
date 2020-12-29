import React, { useEffect, useState } from 'react';
import { Grid, Switch } from '@material-ui/core';
import { useReactMediaRecorder } from "react-media-recorder";

export const Record = () => {
    const [showRecordSession, setShowRecordSession] = useState(false)
    const [swithStatus, setSwithStatus] = useState(false)
    const { status, startRecording, stopRecording, mediaBlobUrl, mediaRecorderOptions } = useReactMediaRecorder({ audio: true, video: false, screen: false });

    useEffect(() => {
        if (swithStatus) {
            startRecording();

        }
        if (!swithStatus && status == 'recording') {
            stopRecording()
            setShowRecordSession(true)
        }
    }, [swithStatus]);

    const toggleSwitchHandler = () => {
        setSwithStatus(prev => !prev)
    }


    return (
        <Grid container alignItems="center" justify="center">
            { showRecordSession ?
                <div>
                    <h3> Play Session </h3>
                    <audio src={mediaBlobUrl} controls />
                </div>
                :
                <div>
                    <Grid item>Record</Grid>
                    <Grid item>
                        <Switch
                            label="On/Off"
                            checked={swithStatus}
                            onChange={toggleSwitchHandler}
                            color="secondary"
                            name="status"
                            inputProps={{ "aria-label": "primary checkbox" }} />
                    </Grid>
                </div>
            }
        </Grid>
    );
}


