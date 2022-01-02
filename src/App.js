import logo from './logo.svg';
import './App.css';
import { MusicPlayerProvider } from './MusicPlayerContext.js';
import Tracklist from './Tracklist.js';
import Controls from './PlayerControls';

function App() {
  return (
    <MusicPlayerProvider>
    <div className="App">      
        <Tracklist />  
        <Controls/>    
    </div>
    </MusicPlayerProvider>
  );
}

export default App;
