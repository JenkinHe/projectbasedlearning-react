import React from 'react'
import { useSelector } from 'react-redux'



export default function Todos() {

    const todos= useSelector((state)=>state.todos)
    
  return (
    <>
    <div>Todos</div>
    {
        todos.map((todo)=>(
            <div key={todo.id}>{todo.text}</div>
        ))
    }
    </>
    
  )
}
