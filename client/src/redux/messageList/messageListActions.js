import { MESSAGELIST_REQUEST } from './messageListTypes.js'
import { MESSAGELIST_SUCCESS } from './messageListTypes.js'
import { MESSAGELIST_FAILURE } from './messageListTypes.js'
import { MESSAGELIST_REFRESH } from './messageListTypes.js'
import axios from 'axios'

export const messageListRequest = (user_id) => {
   return{
        type: MESSAGELIST_REQUEST,
        payload: user_id
   }    
}

export const messageListFailure = (errorMsg) => {
     return{
         type:  MESSAGELIST_FAILURE,
         payload: errorMsg
     }    
  }

export const messageListSuccess = (response) => {
    return{
         type:  MESSAGELIST_SUCCESS,
         payload : response
    }    
 }
 export const messageListRefresh = () => {
    return{
         type:  MESSAGELIST_REFRESH
    }    
 }

 export const messageList = (roomId) => {
    return (dispatch)=>{

        dispatch(messageListRequest);

        axios.get(`/users/rooms/messages/${roomId}`)
        .then(response => {
             //console.log(email);
             console.log(response);
               dispatch(messageListSuccess(response));
        })
        .catch(error => {
         const errorMsg = error.message;
         dispatch(messageListFailure(errorMsg));
     })
        
    }
}

export const refreshMessageList = () => {
    return (dispatch)=>{
        dispatch(messageListRefresh());
    }
}