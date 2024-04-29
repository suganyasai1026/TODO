import React from 'react'
import HeadingComp from './HeadingComp'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/user/user.actions";
import "./SignUp.css"
const SignIn = () => {
    const dispatch = useDispatch()
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        
        dispatch(getUser({Inputs}))
        history("/note")
    }

    return (
        <div className='signup'>
            <div className='container' >
                <div className='row'>
                    <div className='col-lg-4  column col-left d-lg-flex justify-content-center align-items-center d-none'>
                        <HeadingComp first="Sign" second="In" />
                    </div>
                    <div className='col-lg-8 column d-flex  justify-content-center align-items-center'>


                        <div className='d-flex flex-column  w-100 p-3'>
                            <input className='input-signup p-2 my-3' type="email"
                                name="email"
                                placeholder='Enter your email'
                                value={Inputs.email}
                                onChange={change}

                            />
                            <input className='input-signup p-2 my-3' type="password"
                                name="password"
                                placeholder='Enter your password'
                                value={Inputs.password}
                                onChange={change}

                            />
                            <button className='btn-signup p-2' onClick={submit} >signIn</button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SignIn