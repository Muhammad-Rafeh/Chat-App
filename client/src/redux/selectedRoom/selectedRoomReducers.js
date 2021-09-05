import {  SELECTEDROOM_SUCCESS , SELECTEDROOM_FAILURE } from './selectedRoomTypes';

const initialState = {

    //searchingUser : false ,
    roomSelected : false,
    roomId : ""
    //roomCreated:false

}

const selectedRoomReducer = (state=initialState , action) => {

    switch(action.type){
        // case SELECTEDROOM_REQUEST : return {
        //     ...state,
        //     searchingUser : true ,
        //     userFound : false
        // }

        case SELECTEDROOM_SUCCESS : return {
            ...state,
            //searchingUser : false ,
            roomSelected : true,
            roomId : action.payload
        }

        case SELECTEDROOM_FAILURE : return {
            ...state,
            roomSelected : false
        }
        default: return state
    }

}
export default selectedRoomReducer;