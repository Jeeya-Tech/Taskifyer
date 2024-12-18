import React from 'react'
import checked from '../assets/checked.png'
import pending from '../assets/pending.png'
import delete_icon from '../assets/delete.png'


const TaskList = ({text, id, isComplete, deleteTask, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        <img className='w-7' src={isComplete ? checked : pending} alt="" />
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? 'line-through' : " "}`}>{text}</p>
      </div>
      <img onClick={()=>{deleteTask(id)}} className='w-5 cursor-pointer' src={delete_icon} alt="" />
    </div>
  )
}

export default TaskList
