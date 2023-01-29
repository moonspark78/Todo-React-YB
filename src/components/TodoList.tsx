import React from 'react'
import { Todo } from '../model';
import { SingleTodo } from './SingleTodo';
import "./style.css";

interface Props{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div className='todos'>
        {todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
        ))}
 
    </div>
  );
}