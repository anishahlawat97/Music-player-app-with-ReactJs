import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import useMusicPlayer from './useMusicPlayer';

const Tracklist =()=>{     
     const {trackList, currentSongName, playTrack, isPlaying} = useMusicPlayer();
     return(
         <>
         {trackList.map((track, index) => (
             <div className='box'>
                 <button className='button' onClick={() => playTrack(index)}>
                     {currentSongName === track.name && isPlaying? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}
                 </button>
                 <div key={index} className='song-title'>
                     {track.name}
                 </div>
             </div>
         ))}
         </>
     );

}

export default Tracklist;