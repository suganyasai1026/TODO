import axios from "axios"
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user.types"

const baseURL = process.env.REACT_APP_BASE_URL;
export const getUser=(obj)=>async(distpatch)=>{

    distpatch({type:LOGIN_USER_LOADING})
   
    try {
        let data = await axios(`${baseURL}/user/login`,{
            method:"post",
            data:obj.Inputs
        
            })
            let {message,token,status} = data.data
            if(status==1){
                distpatch({type:LOGIN_USER_SUCCESS,payload:token})
            }else{
                
               
                distpatch({type:LOGIN_USER_ERROR})

            }

    } catch (error) {
        distpatch({type:LOGIN_USER_ERROR})

    }

   





}