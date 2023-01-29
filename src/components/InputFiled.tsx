import React, { useRef } from 'react'
import "./style.css"


interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void; 
}


export const InputFiled = ({todo, setTodo, handleAdd}: Props) => {

     const inputRef = useRef<HTMLInputElement>(null)


  return (
    <form className='input' onSubmit={(e) => handleAdd (e)}>
        <input ref={inputRef} type="input" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter a task' className='input_box'/>
        <button className='input_submit'>Go</button>
    </form>
  )
}
 