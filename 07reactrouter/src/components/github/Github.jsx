import React from 'react'
import { useEffect } from 'react';

export default function Github() {

    const [data,setData]=React.useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/JenkinHe').then((response)=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])



  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github repos:{data.public_repos}</div>
  )
}
