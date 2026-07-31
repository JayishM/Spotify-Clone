import { useState } from 'react'
import Navbar from './navbar';
import SideMenu from './sidemenu';
import MainMusic from './mainmusic';
import PlaybackControl from './playbackcontrol';
function App(){
  const [currentSong, setCurrentSong] = useState(null);
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-3">
          <SideMenu />
        </div>
        <div className="col-9">
          <MainMusic setCurrentSong={setCurrentSong} />
        </div>
      </div>
      <PlaybackControl currentSong={currentSong} />
    </div>
  )
}


export default App
