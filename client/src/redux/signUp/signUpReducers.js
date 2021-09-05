import { SIGNUP_REQUEST , SIGNUP_SUCCESS , SIGNUP_FAILURE } from './signUpTypes'

const initialState = {
    signingIn : false,
    signedIn : false
}

const signUpReducer = (state=initialState , action ) => {
    switch(action.type){
        case SIGNUP_REQUEST : return {
            ...state,
            signingIn:true,
            signedIn : false
        }
        case SIGNUP_SUCCESS : return {
            ...state,
            signingIn:false,
            signedIn : true
        }
        case SIGNUP_FAILURE : return {
            ...state,
            signingIn:false,
            signedIn : false
        }
        default: return state
    }
}
export default signUpReducer