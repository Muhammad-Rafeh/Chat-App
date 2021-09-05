import React, { useEffect } from 'react'
//import axios from 'axios'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { newRoom, resetNewRoomState } from '../redux/newRoom/newRoomActions';
import { hideSearch } from '../redux/search/searchActions';
function NewRoom() {

    const user_id = useSelector(state=>state.loginReducers._id);

    const newChatUser = useSelector(state => state.searchReducers.searchedUser._id);
    let roomCreated = useSelector(state => state.newRoomReducers.roomCreated);

    const dispatch = useDispatch();

    const createChat = () => {

         dispatch(newRoom({user_id,newChatUser}));
         
        if(roomCreated){
            dispatch(hideSearch());
            console.log("hide room")
    }
    }

    const closeSearch = () => {
        dispatch(hideSearch());
    }

    useEffect(() => {
        
        if(roomCreated){
            dispatch(hideSearch());
            dispatch(resetNewRoomState());
            console.log("hide room")
    }

        // return () => {
        //     cleanup
        // }
    }, [dispatch,roomCreated])

    return (
        <div id="newRoom_wrapper">
            <button id="newRoom_chatButton" onClick={createChat}>chat</button>
            <button id="newRoom_closeButton" onClick={closeSearch}>Close</button>
        </div>
    )
}

export default NewRoom

