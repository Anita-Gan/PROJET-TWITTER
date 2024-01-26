import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import Timeline from './Timeline'
import Avatar from './Avatar'
import Text1 from './Text1'
import Text2 from './text2'
import Icon from './Iconscnn'
import Text3 from './text3'
import Text4 from './Text4'
import Text5 from './Text5'
import Nav from './Sidebar'
import Trends from './Trends'
import Home from './assets/composant sidebar/Home'
import Profil from './assets/composant sidebar/Profil'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Messages from './assets/composant sidebar/Messages'
import './assets/Stylesidebar/Profil.css'



function App() {

  return (
    <>
      <BrowserRouter>        
        <div className='body'>
          <div className='Navbar'>
            <Nav>
              <Button />
            </Nav>
          </div>
          {/* <div className="timeline">
            <Timeline></Timeline>
          </div> */}
          <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
          <div>
            <Trends></Trends>
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
