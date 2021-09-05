import { ROOMLIST_REQUEST , ROOMLIST_SUCCESS , ROOMLIST_FAILURE } from './roomListTypes';

const initialState = {

    fetchingRooms: false ,
    roomsFetched : false,
    rooms : []

}

const roomListReducer = (state=initialState , action) => {

    switch(action.type){
        case ROOMLIST_REQUEST : return {
            ...state,
            fetchingRooms : true ,
            roomsFetched : false
        }

        case ROOMLIST_SUCCESS : return {
            ...state,
            fetchingRooms : false ,
            roomsFetched : true,
            rooms : action.payload.data
        }

        case ROOMLIST_FAILURE : return {
            ...state,
            fetchingRooms : true ,
            roomsFetched : false
        }
        default: return state
    }

}
export default roomListReducer;