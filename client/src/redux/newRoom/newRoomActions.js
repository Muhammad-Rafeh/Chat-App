import { NEWROOM_REQUEST } from './newRoomTypes.js'
import { NEWROOM_SUCCESS } from './newRoomTypes.js'
import { NEWROOM_FAILURE } from './newRoomTypes.js'
import axios from 'axios'

export const newRoomRequest = (user_id) => {
   return{
        type: NEWROOM_REQUEST,
        payload: user_id
   }    
}

export const newRoomFailure = (errorMsg) => {
     return{
         type:  NEWROOM_FAILURE,
         payload: errorMsg
     }    
  }

export const newRoomSuccess = (response) => {
    return{
         type:  NEWROOM_SUCCESS,
         payload : response
    }    
 }

 export const newRoom = (users) => {
    return (dispatch)=>{

        dispatch(newRoomRequest());

        axios.post(`/users/rooms/new`,{
                        name:"dafault",
                        topic:"default",
                        //users:[{user_id} , {newChatUser}]
                        firstUser:users.user_id,
                        newChatUser:users.newChatUser
        })
        .then(response => {
             //console.log(email);
             console.log(response);
               dispatch(newRoomSuccess(response));
        })
        .catch(error => {
         const errorMsg = error.message;
         dispatch(newRoomFailure(errorMsg));
     })
        
    }
} 

export const resetNewRoomState = () => {
    return(dispatch) =>{
        dispatch(newRoomFailure());
    }
}