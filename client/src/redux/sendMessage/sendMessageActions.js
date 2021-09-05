import { SENDMESSAGE_REQUEST } from './sendMessageTypes.js'
import { SENDMESSAGE_SUCCESS } from './sendMessageTypes.js'
import { SENDMESSAGE_FAILURE } from './sendMessageTypes.js'
import axios from 'axios'

import socketIoClient from 'socket.io-client';


export const sendMessageRequest = (user_id) => {
   return{
        type: SENDMESSAGE_REQUEST,
        payload: user_id
   }    
}

export const sendMessageFailure = (errorMsg) => {
     return{
         type:  SENDMESSAGE_FAILURE,
         payload: errorMsg
     }    
  }

export const sendMessageSuccess = (response) => {
    return{
         type:  SENDMESSAGE_SUCCESS,
         payload : response
    }    
 }

 export const sendMessage = (data) => {
    return (dispatch)=>{

        dispatch(sendMessageRequest);

        axios.post(`/users/rooms/messages`,{
            room : data.roomId,
            user_id : data.userId,
            message_line : data.messageContent
        })
        .then(response => {
            // console.log(e);
             console.log(response);

             const socket = socketIoClient("http://localhost:5000");
             
             socket.emit("newMessage",data.roomId);


            dispatch(sendMessageSuccess(response));
        })
        .catch(error => {
         const errorMsg = error.message;
         dispatch(sendMessageFailure(errorMsg));
     })
        
    }
}

export const sendMessageReset = () => {
    return(dispatch)=>{
        dispatch(sendMessageFailure());
    }
}

