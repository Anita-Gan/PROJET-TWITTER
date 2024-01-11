import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import Home from './Home'
import Avatar from './Avatar'
import Text1 from './Text1'
import Text2 from './text2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="timeline">
       <Home></Home>
       <Avatar>
        <Button />
       </Avatar>
       <Text1 ></Text1> 
       <Text2></Text2>   
      
      </div>
    </>
  )
}

export default App
