import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { messageList } from '../redux/messageList/messageListActions';
import UserImage from '../assets/user1.png' ;
import { messageListRefresh } from '../redux/messageList/messageListActions';
import { sendMessageReset } from '../redux/sendMessage/sendMessageActions';
import SendMessage from './SendMessage';

import socketIoClient from 'socket.io-client';
const socket = socketIoClient("http://localhost:5000"); //was initially at line 40 above use effect
function MessageList(){

    const roomId = useSelector(state => state.selectedRoomReducers.roomId);
    const messages = useSelector(state => state.messageListReducer.messageList);
    let refresh = useSelector(state => state.messageListReducer.refresh);
    const messageSent = useSelector(state => state.sendMessageReducer.messageSent);
    const userId = useSelector(state => state.loginReducers._id);
    const dispatch = useDispatch();

    const messageScrollRef = useRef(null);

    useEffect(() => {
        if (messageScrollRef) {
          messageScrollRef.current.addEventListener('DOMNodeInserted', event => {
            const { currentTarget: target } = event;
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
          });
        }
      }, [])
     

    useEffect(()=>{

        dispatch(messageList(roomId));
        //console.log("hi");
        dispatch(sendMessageReset());

    },[dispatch,roomId,messageSent]);
   
    useEffect(()=>{
        
        socket.on("recieveMessage",theRoomId=>{
            console.log("message recienved");
            if(theRoomId===roomId){
                dispatch(messageListRefresh());
                dispatch(messageList(roomId));
                console.log("refreshed")
            }
        });
        
    },[refresh,roomId,socket,dispatch])

//useEffect(()=>{})

    return(
        <div>
            <div className="messageList_header_wrapper">
                <img className="messageList_header_img" src={UserImage} alt="User" /> 
            </div>
            <div className="messageList_wrapper" ref={messageScrollRef}>
            {messages.map((message)=>{
                return(
                    <div key={message._id} className={userId==message.user_id ? "from_user":"from_other_user"}>
                        <p>{message.message_line}</p>
                    </div>
                )
            })}
            </div>
            <SendMessage />
        </div>
    )
} 

export default MessageList;