import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./privateroutes";
import Home from "../components/Home/Home";
import AboutUs from "../components/About/About";
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";
import Todo from "../components/Todo/Todo";

export default function AllRoutes(){

    return <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path='/about' element={<AboutUs/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/signin' element={<SignIn/>}/>
       <Route path="/note" element={<PrivateRoute ><Todo/></PrivateRoute>}></Route>

    </Routes>
}