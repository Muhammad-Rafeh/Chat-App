// import { ConnectionStates } from 'mongoose'
import { SIGNUP_REQUEST } from './signUpTypes.js'
import { SIGNUP_SUCCESS } from './signUpTypes.js'
import { SIGNUP_FAILURE } from './signUpTypes.js'
import axios from 'axios'

export const signUpRequest = (signUpInfo) => {
   return{
        type: SIGNUP_REQUEST,
        payload: signUpInfo
   }    
}

export const signUpFailure = (errorMsg) => {
     return{
         type: SIGNUP_FAILURE,
         payload: errorMsg
     }    
  }

export const signUpSuccess = (response) => {
    return{
         type: SIGNUP_SUCCESS,
         payload : response
         
    }    
 }



 export const signUp = (data) => {
     return (dispatch)=>{
         dispatch(signUpRequest);
         axios.post(`/users` , {
             username : data.username,
             email : data.email,
             password : data.password,
             is_active: false
         })
         .then(response => {
              console.log(response);
              dispatch(signUpSuccess(response));
         })
         .catch(error => {
          const errorMsg = error.message;
          dispatch(signUpFailure(errorMsg));
      })
         
     }
 }