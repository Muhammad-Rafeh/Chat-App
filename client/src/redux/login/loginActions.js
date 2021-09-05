// import { ConnectionStates } from 'mongoose'
import { LOGIN_REQUEST } from './loginTypes.js'
import { LOGIN_SUCCESS } from './loginTypes.js'
import { LOGIN_FAILURE } from './loginTypes.js'
import axios from 'axios'

export const loginRequest = (loginInfo) => {
   return{
        type: LOGIN_REQUEST,
        payload: loginInfo
   }    
}

export const loginFailure = (errorMsg) => {
     return{
         type: LOGIN_FAILURE,
         payload: errorMsg
     }    
  }

export const loginSuccess = (response) => {
    return{
         type: LOGIN_SUCCESS,
         payload : response
         
    }    
 }



 export const login = (data) => {
     return (dispatch)=>{
         dispatch(loginRequest);
         axios.get(`/users/?username=${data.username}`)
         .then(response => {
              console.log(response);
              if(data.password===response.data.password){
                dispatch(loginSuccess(response));
              }
              else{
                 const  errorMsg= "Wrong Password";
                dispatch(loginFailure(errorMsg));
              }
              
         })
         .catch(error => {
          const errorMsg = error.message;
          dispatch(loginFailure(errorMsg));
      })
         
     }
 }