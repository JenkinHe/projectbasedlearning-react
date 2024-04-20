import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount,setAmount] =useState(0);
  const [from,setFrom] =useState('usd');
  const [to,setTo]= useState('inr');
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo=useCurrencyInfo(from);
  const options =Object.keys(currencyInfo);

  function swap(){
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);

  }

  function convert(){
    setConvertedAmount(amount*currencyInfo[to]);
  }

  const imageurl='https://www.allkpop.com/upload/2023/07/content/231619/web_data/allkpop_1690144054_hanni.jpg'

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${imageurl})`}}>
      <h1 className='bg-red-200'> Test for tailwwind</h1>
    </div>
  )
}

export default App
