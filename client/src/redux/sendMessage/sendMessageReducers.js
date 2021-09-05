import { SENDMESSAGE_REQUEST , SENDMESSAGE_SUCCESS , SENDMESSAGE_FAILURE } from './sendMessageTypes';

const initialState = {

    sendingMessage : false ,
    messageSent : false,
    
    //roomCreated:false

}

const sendMessageReducer = (state=initialState , action) => {

    switch(action.type){
        case SENDMESSAGE_REQUEST : return {
            ...state,
            sendingMessage : true ,
            messageSent : false
        }

        case SENDMESSAGE_SUCCESS : return {
            ...state,
            sendingMessage : false ,
            messageSent : true
        }

        case SENDMESSAGE_FAILURE : return {
            ...state,
            sendingMessage: false,
            messageSent : false
        }
        default: return state
    }

}
export default sendMessageReducer;