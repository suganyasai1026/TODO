import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../Redux/user/user.types';
const Navbar = () => {
    const dispatch = useDispatch()
    const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand" to="#">Note app</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/about">About us</Link>
                            </li>
                            <li className="nav-item mx-2 ">
                                <Link className="nav-link active" aria-current="page" to="/note">To Do</Link>
                            </li>
                            {!auth &&  <><li className="nav-item mx-2">

                                <Link className="nav-link active btn-nav p-2" aria-current="page" to="/signup">SignUp</Link>


                            </li><li className="nav-item mx-2 ">
                                    <Link className="nav-link active btn-nav p-2" aria-current="page" to="/signin">SignIn</Link>
                                </li></>
                          }
                            <li className="nav-item mx-2 ">
                            {auth &&
                            <Link className="nav-link active btn-nav p-2" aria-current="page" to="/" onClick={()=>dispatch({type:LOGOUT})}>logout</Link>
                            } 
                            </li>
                           
                           
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

