import React, { useEffect, useRef, useState } from 'react';
import task_icon from '../assets/tasks.png';
import TaskList from './TaskList';

const Todo = () => {

const [taskList, setTaskList] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);

const inputRef = useRef();
 
const add = ()=>{
  const inputText = inputRef.current.value.trim();
  // console.log(inputText);
  
  if(inputText === " "){
    return null;
  }

  const newTask ={
    id : Date.now(),
    text : inputText,
    isComplete : false,
  }

  setTaskList((prev)=> [...prev, newTask]);
  inputRef.current.value = " ";
}

const deleteTask = (id)=>{
  setTaskList((prevTasks)=>{
    return prevTasks.filter((task)=> task.id !== id)
  })
}

const toggle = (id)=>{
  setTaskList((prevTasks)=>{
    return prevTasks.map((task)=>{
      if(task.id === id){
        return {...task, isComplete: !task.isComplete}
      }
      return task;
    })
  })
}

useEffect(()=>{
  // console.log(taskList);
  localStorage.setItem("tasks", JSON.stringify(taskList));
}, [taskList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        {/* ---TITLE--- */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={task_icon} alt="" />
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>
        {/* ---INPUT--- */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
          <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add task' />
          <button onClick={add} className='border-none rounded-full bg-blue-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
        </div>
        {/* ---TASK LIST--- */}
        <div>
          {taskList.map((item, index)=>{
            return <TaskList key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTask={deleteTask} toggle={toggle} />
          })}
          {/* <TaskList text="Learn Coding"/>
          <TaskList text="Practice Coding"/> */}
        </div>
    </div>
  )
}

export default Todo;
