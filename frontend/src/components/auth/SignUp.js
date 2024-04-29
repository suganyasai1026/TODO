import React, { useState } from 'react'
import "./SignUp.css"
import HeadingComp from './HeadingComp'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const baseURL = process.env.BASE_URL;
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email: "",
        name: "",
        password: ""
    })
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value })
    }

    const submit = async (e) => {
        e.preventDefault();
        await axios.post(`${baseURL}/user/register`,Inputs).then((response)=>{
          if(response.data.message==="user created"){
            setInputs({
                email: "",
                username: "",
                password: "",
              });
              history("/signin")
          }
        })
    }
    return (
        <div className='signup'>
            <div className='container' >
                <div className='row'>
                    <div className='col-lg-8 column d-flex  justify-content-center align-items-center'>
                        <div className='d-flex flex-column  w-100 p-3'>
                            <input
                                className='input-signup p-2 my-3'
                                type="email"
                                name="email"
                                placeholder='Enter your email'
                                value={Inputs.email}
                                onChange={change}

                            />
                            <input className='input-signup p-2 my-3' type="name"
                                name="name"
                                placeholder='Enter your name'
                                value={Inputs.name}
                                onChange={change}


                            />
                            <input className='input-signup p-2 my-3' type="password"
                                name="password"
                                placeholder='Enter your password'
                                value={Inputs.password}
                                onChange={change}


                            />
                            <button className='btn-signup p-2' onClick={submit}>signup</button>

                        </div>
                    </div>
                    <div className='col-lg-4  column col-left d-lg-flex justify-content-center align-items-center d-none'>
                        <HeadingComp first="Sign" second="Up" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp