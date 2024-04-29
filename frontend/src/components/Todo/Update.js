import React, { useEffect, useState } from 'react'
import './Todo.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateNotes } from '../../Redux/notes/note.actions';
import { useDispatch } from "react-redux";
const Update = ({ display ,update}) => {
    const dispatch = useDispatch();
    const [Inputs, setInputs] = useState({
        title: "",
        body: "",
    });
    const [id,setId]= useState()
    useEffect(()=>{
        setInputs({
            title: update.title,
            body: update.body,
          });
          setId(update._id)
    },[update])
    

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };
    const submit= async()=>{
       
  dispatch(updateNotes(id,Inputs))
  display("none");
    }
    return (
        <><div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
            <h3>
                Update Your Task
            </h3>
            <div>
                <input
                    type='text'
                    className='todo-inputs my-4 p-3 w-100'
                    name='title'
                    value={Inputs.title}
                    onChange={change}
                />
                <textarea
                    type='text'
                    className='todo-inputs p-3 w-100'
                    name='body'
                    value={Inputs.body}

                    onChange={change}
                />

            </div>
            <div>
                <button className='btn btn-dark my-4' onClick={submit} >
                    UPDATE
                </button>
                <button className='btn btn-danger my-4 mx-3' onClick={() => {
                    display("none");
                }} >
                    close
                </button>

            </div>



        </div>
        </>
    )
}

export default Update