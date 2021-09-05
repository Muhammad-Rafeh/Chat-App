import { createStore, combineReducers , applyMiddleware } from 'redux' ;
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducers from './login/loginReducers'
import roomListReducers from './roomList/roomListReducers';
import searchReducers from './search/searchReducers';
import newRoomReducers from './newRoom/newRoomReducers';
import selectedRoomReducers from './selectedRoom/selectedRoomReducers';
import messageListReducer from './messageList/messageListReducers';
import sendMessageReducer from './sendMessage/sendMessageReducers';
import signUpReducer from './signUp/signUpReducers'

const rootReducer = combineReducers({loginReducers, roomListReducers, searchReducers, newRoomReducers, selectedRoomReducers, messageListReducer , sendMessageReducer , signUpReducer})

 const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)));

 export default store;