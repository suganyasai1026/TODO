import React from 'react'
import './Todo.css'
import { MdOutlineEditCalendar } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";

const TodoCards = ({
    title,body,id,delid,display, updateId,
    toBeUpdate,
}) => {
  return (
    <div className='p-3 todo-card'>
        <div>
        
        <h5>{title}</h5>
        <p className="todo-card-p">{body}</p>
        </div>
        <div className="d-flex justify-content-around ">
        <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1  'onClick={()=>{
                    display("block")
                    toBeUpdate(updateId)
                }}>
        <MdOutlineEditCalendar  className='card-icon' />update
        </div >
        <div  className="d-flex justify-content-center align-items-center card-icon-head  px-2 py-1 text-danger "onClick={()=>delid(id)}>
        <MdOutlineDeleteOutline  className='card-icon del'/>delete
        </div>
        </div>
       
        </div>
  )
}

export default TodoCards