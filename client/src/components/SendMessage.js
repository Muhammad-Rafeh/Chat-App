import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'; 
import { sendMessage } from '../redux/sendMessage/sendMessageActions';

function SendMessage() {

    const [ messageContent , setMessageContent ] = useState("");

    const roomId = useSelector(state => state.selectedRoomReducers.roomId);
    const userId = useSelector(state => state.loginReducers._id);
    const messageSent = useSelector(state => state.sendMessageReducer.messageSent);

    const dispatch = useDispatch();

    const handleKeyPress = (e) => {
        if(e.charCode == 13){
            handleSendMessage();
        }
    }

    useEffect(() => {
        if(messageSent){
            setMessageContent("");
        }
    },[messageSent])

    const handleSendMessage = () => {
            //console.log("handle send essage activated")
            dispatch(sendMessage({roomId , userId , messageContent}));

    }

    return (
       <div className="send_message_wrapper">
           <input className="send_message_input" placeholder="Type a message" type="text" onChange={e => setMessageContent(e.target.value)} value={messageContent} onKeyPress={handleKeyPress}/>
           {/* <button className="send_message_button" onClick={handleSendMessage} >SEND</button> */}
       </div>
    )
}

export default SendMessage;