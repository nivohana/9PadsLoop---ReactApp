import React, { Children } from 'react';
import styles from './Pads.module.css';
import Pad from '../Pad/Pad';
import * as Icon from 'react-feather';


const Pads = (props) => {
    const pads = [
    {id:'1' ,  Icon: <Icon.Camera />, Audio:'120_future_funk_beats_25.mp3'},
    {id:'2' ,  Icon:<Icon.Radio /> , Audio:'120_stutter_breakbeats_16.mp3'},
    {id:'3' ,  Icon:<Icon.Rss />, Audio:'Bass Warwick heavy funk groove on E 120 BPM.mp3' },
    {id:'4' ,  Icon:<Icon.Star /> , Audio:'electric guitar coutry slide 120bpm - B.mp3'},
    {id:'5' ,  Icon:<Icon.Target />, Audio:'FUD_120_StompySlosh.mp3' },
    {id:'6' ,  Icon:<Icon.Umbrella /> , Audio:'GrooveB_120bpm_Tanggu.mp3'},
    {id:'7' ,  Icon:<Icon.Music /> , Audio:'MazePolitics_120_Perc.mp3'},
    {id:'8' ,  Icon:<Icon.Bell /> , Audio:'PAS3GROOVE1.03B.mp3'},
    {id:'9' ,  Icon:<Icon.Volume /> , Audio:'SilentStar_120_Em_OrganSynth.mp3'},
    ]


    return (
        <div className={styles.Pads}>
            {pads.map( pad => {
                return <Pad key={pad.id} AudioTrack={pad.Audio}> {pad.Icon}  </Pad> 
            })
            }
         
          </div>
    );
}

export default Pads;