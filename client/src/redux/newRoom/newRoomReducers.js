import { NEWROOM_REQUEST , NEWROOM_SUCCESS , NEWROOM_FAILURE } from './newRoomTypes';

const initialState = {

    creatingRoom:false,
    roomCreated:false

}

const newRoomReducer = (state=initialState , action) => {

    switch(action.type){
        case NEWROOM_REQUEST : return {
            ...state,
            creatingRoom : true ,
            roomCreated : false
        }

        case NEWROOM_SUCCESS : return {
            ...state,
            creatingRoom : false ,
            roomCreated : true,
        }

        case NEWROOM_FAILURE : return {
            ...state,
            creatingRoom: false ,
            roomCreated : false
        }
        default: return state
    }

}
export default newRoomReducer;