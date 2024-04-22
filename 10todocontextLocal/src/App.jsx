import { useEffect, useState } from 'react'
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

  function deleteTodo(id){
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  function toggleComplete(id){
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:{prevTodo}))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('todos'))
    if(todos&&todos.length){
      setTodos(todos)

    }
  },[])
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <h1 className='text-3xl font-bold underline'>dasadhabsukdbajkdfbckasfcsd</h1>
    </TodoProvider>
  )
}

export default App
