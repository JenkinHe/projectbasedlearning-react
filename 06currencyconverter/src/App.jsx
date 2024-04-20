import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const imageurl='https://www.allkpop.com/upload/2023/07/content/231619/web_data/allkpop_1690144054_hanni.jpg'

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${imageurl})`}}>
      <h1 className='bg-red-200'> Test for tailwwind</h1>
    </div>
  )
}

export default App
