import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import Home from './Home'
import Avatar from './Avatar'
import Text1 from './Text1'
import Text2 from './text2'
import Icon from './Iconscnn'
import Text3 from './text3'
import Text4 from './Text4'
import Text5 from './Text5'
import Nav from './Sidebar'
import Trends from './Trends'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='body'>
        <div className='Navbar'>
          <Nav>
            <Button />
          </Nav>
        </div>
        <div className="timeline">
          <Home></Home>
          <Avatar>
            <Button />
          </Avatar>
          <Text1 ></Text1>
          <Text2></Text2>
          <Text3></Text3>
          <Text4></Text4>
          <Text5></Text5>
        </div>
        <div>
          <Trends></Trends>
        </div>
      </div>


    </>
  )
}

export default App
