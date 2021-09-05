import { SEARCH_REQUEST } from './searchTypes.js'
import { SEARCH_SUCCESS } from './searchTypes.js'
import { SEARCH_FAILURE } from './searchTypes.js'
import axios from 'axios'

export const searchRequest = (user_id) => {
   return{
        type: SEARCH_REQUEST,
        payload: user_id
   }    
}

export const searchFailure = (errorMsg) => {
     return{
         type:  SEARCH_FAILURE,
         payload: errorMsg
     }    
  }

export const searchSuccess = (response) => {
    return{
         type:  SEARCH_SUCCESS,
         payload : response
    }    
 }

 export const search = (email) => {
    return (dispatch)=>{

        dispatch(searchRequest);

        axios.get(`/users/email/?email=${email}`)
        .then(response => {
             console.log(email);
             console.log(response);
               dispatch(searchSuccess(response));
        })
        .catch(error => {
         const errorMsg = error.message;
         dispatch(searchFailure(errorMsg));
     })
        
    }
}

export const hideSearch = () => {
    return (dispatch)=>{
        dispatch(searchFailure("hide"));
    }
}