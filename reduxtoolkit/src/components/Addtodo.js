import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

export default function Addtodo() {
    const [input,setInput] =useState('')
    const dispatch =useDispatch()

    function addTodoHandler(e){
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <form onSubmit={addTodoHandler}>
        <input type='text' placeholder='Enter a Todo' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit'> Add todo</button>
    </form>
  )
}
