import { useState } from 'react'
import Navbar from './navbar';
import SideMenu from './sidemenu';
function App(){
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-3">
          <SideMenu />
        </div>
      </div>
    </div>
  )
}


export default App
