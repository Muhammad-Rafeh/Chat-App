import { MESSAGELIST_REQUEST , MESSAGELIST_SUCCESS , MESSAGELIST_FAILURE , MESSAGELIST_REFRESH} from './messageListTypes';

const initialState = {

    fetchingMesages : false ,
    messagesFound : false,
    refresh:false,
    messageList : []
    //roomCreated:false

}

const messageListReducer = (state=initialState , action) => {

    switch(action.type){
        case MESSAGELIST_REQUEST : return {
            ...state,
            fetchingMesages : true ,
            messagesFound : false
        }

        case MESSAGELIST_SUCCESS : return {
            ...state,
            fetchingMesages : false ,
            messagesFound : true,
            messageList : action.payload.data
        }

        case MESSAGELIST_FAILURE : return {
            ...state,
            fetchingMesages: false ,
            messagesFound : false
        }
        case MESSAGELIST_REFRESH : return {
            ...state,
           refresh : !state.refresh
        }
        default: return state
    }

}
export default messageListReducer;