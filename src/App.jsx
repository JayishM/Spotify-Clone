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
        <div className="col-2">
          <SideMenu />
        </div>
        <div className="col-10">
          <MainMusic setCurrentSong={setCurrentSong} />
        </div>
      </div>
      <PlaybackControl currentSong={currentSong} setCurrentSong={setCurrentSong}/>
    </div>
  )
}


export default App
