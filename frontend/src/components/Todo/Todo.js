import React, { useEffect, useState } from 'react'
import './Todo.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoCards from './TodoCards';
import Update from './Update';
import { useDispatch, useSelector } from "react-redux";
import { createNotes, deleteNotes, getNotes } from '../../Redux/notes/note.actions';
const Todo = () => {
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.noteReducer);
    const[display,setDisplay]=useState(false)
    
    const [Input, setInput] = useState({
        title: "",
        body: ""
    })
    const [Array, setArray] = useState([])
    const [toUpdateArray, setToUpdateArray] = useState([])
    

    const show = () => {
        document.getElementById("textarea").style.display = "block"
    }

    const change = (e) => {
        const { name, value } = e.target;
        setInput({ ...Input, [name]: value })
    }
    const submit = () => {
        if (Input.title === "" || Input.body === "") {
            toast.error("title and body should not be empty")
        } else {
           
            dispatch(createNotes({ Input }))
            setInput({ title: "", body: "" });

            toast.success("your task is added")
            
        }
    }

    const del = (id) => {
        dispatch(deleteNotes(id));
        toast.success("your task is deleted")
    }
    const dis = (value) => {
        document.getElementById("todo-update").style.display = value;
    };
    const update = (value) => {

        setToUpdateArray(Array[value]);
        if(toUpdateArray){
            setDisplay(true)

        }

    }


    useEffect(() => {
        
        dispatch(getNotes());
    }, [])
   

    useEffect(() => {
        setArray(data);
        console.log(data, "a")

    }, [data]);
    return (
        <><div className='todo'>
            <ToastContainer />
            <div className='container flex-column my-4 d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column todo-inputs-div w-lg-50 w-100 p-1'>
                    <input
                        type='text'
                        placeholder='TITLE'
                        className='todo-inputs my-2 p-2'
                        name='title'
                        onClick={show}
                        value={Input.title}
                        onChange={change} />
                    <textarea
                        id="textarea"
                        type='text'
                        placeholder='body'
                        className='todo-inputs p-2'
                        name='body'
                        value={Input.body}

                        onChange={change} />

                </div>
                <div className='w-50 w-100 d-flex justify-content-end my-3'>
                    <button className='home-btn px-2 py-1' onClick={submit}>
                        Add
                    </button>
                </div>
            </div>

            <div className='todo-body'>
                <div className='container-fluid'>
                    <div className='row'>

                        {Array && Array.map((item, Index) => {
                            return (<div className='col-lg-3 mx-ld-5 col-11 mx-3 my-2' key={Index}>
                                <TodoCards title={item.title} body={item.body} id={item._id} delid={del} display={dis} updateId={Index} toBeUpdate={update} />
                            </div>

                            );
                        })}
                    </div>
                </div>
            </div>


        </div>

     
      
           <div className='todo-update' id="todo-update">
           {display&&
                <div className='container update'>
                    <Update display={dis} update={toUpdateArray} />
                </div>
                }  
            </div>
           
            </>
    )
}

export default Todo