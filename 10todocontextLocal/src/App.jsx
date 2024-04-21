import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [todos,setTodos]= useState([]);

  function addTodo(todo){
    setTodos((prev)=>[{id:Date.now(), ...todo},[...prev]])

  }

  function updateTodo(id,todo){
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===todo.id?todo:prevTodo)))
  }

  


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <h1 className='text-3xl font-bold underline'>dasadhabsukdbajkdfbckasfcsd</h1>
    </TodoProvider>
  )
}

export default App
