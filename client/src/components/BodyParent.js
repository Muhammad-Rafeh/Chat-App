import React from 'react'
import RoomList from './RoomList';
import Nav from './Nav';
import MessageList from './MessageList';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BodyParent() {

    const loggedIn = useSelector(state => state.loginReducers.loggedIn);

    return (
        
        <div className="bodyParentWrapper">
            {loggedIn ? "" : <Redirect to="/" />}
            <div className="navAndRoomList" >
                <Nav />
                <RoomList />
            </div>
            <div className="messageList">
                <MessageList />
            </div>
            
        </div>
    )
}

export default BodyParent
