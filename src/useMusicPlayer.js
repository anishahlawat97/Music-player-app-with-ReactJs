import React from "react";
import { MusicPlayerContext } from "./MusicPlayerContext";

const useMusicPlayer = () => {
    const [state, setState] = React.useContext(MusicPlayerContext);

    const playTrack = (index) => {
        if(index === state.currentSongIndex)
            togglePlay();
        else{
            state.audioPlayer.pause();
            state.audioPlayer = new Audio(state.tracks[index].file);
            state.audioPlayer.play();
            setState(state => ({...state, currentSongIndex: index, isPlaying: true}));
        }
    }

    const togglePlay = () => {
        if(state.isPlaying){
            state.audioPlayer.pause();
        }
        else{
            state.audioPlayer.play();
        }
        setState(state => ({...state, isPlaying: !state.isPlaying}));
    }

    const playPrevTrack = () => {
        const newIndex = ((state.currentSongIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
        playTrack(newIndex);
    }

    const playNextTrack = () => {
        const newIndex = (state.currentSongIndex + 1) % state.tracks.length;
        playTrack(newIndex);
    }

    return {
        playTrack,
        togglePlay,
        currentSongName: state.currentSongIndex !== null && state.tracks[state.currentSongIndex].name,
        trackList: state.tracks,
        isPlaying: state.isPlaying,
        playPrevTrack,
        playNextTrack,        
        };
}

export default useMusicPlayer;