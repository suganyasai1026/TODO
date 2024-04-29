
import { useSelector } from "react-redux"
import SignIn from "../components/auth/SignIn"


export default function PrivateRoute({children}){

    const {auth} = useSelector((state)=>state.userReducer)


        if(auth){
            return children
        }


    return <SignIn></SignIn>
}