import React, { useState } from 'react'
import {useTodo} from '../contexts/ToDoContext'

export default function TodoForm() {
    const [todo,setTodo]=useState('')
    const {addTodo}= useTodo()

    function add(e){
        e.preventDefault()
        if(!todo) return;
        addTodo({todo,completed:false})
        setTodo('')
    }

  return (
    <form onSubmit={add} className='flex'>
        <input type='text'
        placeholder='Write todo'
        className=' w-full border border-black/10 rounded-l-lg px-3 outline duration-150 bg-white/20 py-1.5'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button type='submit'
        className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'> Add</button>
    </form>
  )
}
