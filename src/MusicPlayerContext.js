import React from "react";
import Cold from './assets/Cold-Mess.mp3';
import Someone from './assets/someone.mp3';
import End from './assets/in-the-end.mp3';

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
    const [state, setState] = React.useState({
        audioPlayer: new Audio(),
        tracks:[
            {
                name: 'cold/mess - Prateek Kuhad',
                file: Cold,
            },
            {
                name: 'Someone To You - Banners',
                file: Someone,
            },
            {
                name: 'In The End - Linkin Park',
                file: End,
            },
        ],
        currentSongIndex: null,
        isPlaying: false,
    });
    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    );
}
export {MusicPlayerContext, MusicPlayerProvider};