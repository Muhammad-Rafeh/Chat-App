//import { SELECTEDROOM_REQUEST } from './selectedRoomTypes.js'
import { SELECTEDROOM_SUCCESS } from './selectedRoomTypes.js'
import { SELECTEDROOM_FAILURE } from './selectedRoomTypes.js'
//import axios from 'axios'

// export const selectedRoomRequest = (user_id) => {
//    return{
//         type: SELECTEDROOM_REQUEST,
//         payload: user_id
//    }    
// }

export const selectedRoomFailure = (errorMsg) => {
     return{
         type:  SELECTEDROOM_FAILURE,
         payload: errorMsg
     }    
  }

export const selectedRoomSuccess = (response) => {
    return{
         type:  SELECTEDROOM_SUCCESS,
         payload : response
    }    
 }

 export const selectedRoom = (roomId) => {
    return (dispatch)=>{

        
               dispatch(selectedRoomSuccess(roomId));
        
            
    }
}
