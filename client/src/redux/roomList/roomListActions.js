import { ROOMLIST_REQUEST } from './roomListTypes.js'
import { ROOMLIST_SUCCESS } from './roomListTypes.js'
import { ROOMLIST_FAILURE } from './roomListTypes.js'
import axios from 'axios'

export const roomListRequest = (user_id) => {
   return{
        type: ROOMLIST_REQUEST,
        payload: user_id
   }    
}

export const roomListFailure = (errorMsg) => {
     return{
         type:  ROOMLIST_FAILURE,
         payload: errorMsg
     }    
  }

export const roomListSuccess = (response) => {
    return{
         type:  ROOMLIST_SUCCESS,
         payload : response
    }    
 }

 export const roomList = (user_id) => {
    return (dispatch)=>{

        dispatch(roomListRequest);

        axios.get(`/users/rooms/inRooms/${user_id}`)
        .then(response => {
             console.log(user_id);
             console.log(response);
               dispatch(roomListSuccess(response));
        })
        .catch(error => {
         const errorMsg = error.message;
         dispatch(roomListFailure(errorMsg));
     })
        
    }
}

