import { SEARCH_REQUEST , SEARCH_SUCCESS , SEARCH_FAILURE } from './searchTypes';

const initialState = {

    searchingUser : false ,
    userFound : false,
    searchedUser : [],
    //roomCreated:false

}

const searchReducer = (state=initialState , action) => {

    switch(action.type){
        case SEARCH_REQUEST : return {
            ...state,
            searchingUser : true ,
            userFound : false
        }

        case SEARCH_SUCCESS : return {
            ...state,
            searchingUser : false ,
            userFound : true,
            searchedUser : action.payload.data
        }

        case SEARCH_FAILURE : return {
            ...state,
            searchingUser: false ,
            userFound : false
        }
        default: return state
    }

}
export default searchReducer;