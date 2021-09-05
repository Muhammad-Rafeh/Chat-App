import React, { useState, useEffect } from 'react'
import UserImage from '../assets/user1.png' ;
import { useSelector } from 'react-redux';
//import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { roomList } from '../redux/roomList/roomListActions';
import { selectedRoom } from '../redux/selectedRoom/selectedRoomActions'
import '../App.css' ;
function RoomList() {
    //const testValues = ["kashif" , "Akbar" , "Asjad" , "Farhan"]; 

    const user_id = useSelector(state=>state.loginReducers._id);
    const state = useSelector(state=>state);
    let roomCreated = useSelector(state => state.newRoomReducers.roomCreated);

    console.log(user_id);
    const [ usernames , setUsernames ] = useState([]);


    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(roomList(user_id));
        
       console.log(roomCreated);
    },[user_id,dispatch,roomCreated])//user_id,dispatch,usernames,setUsernames,state.roomListReducers.rooms  //,roomCreated

    useEffect(()=>{
        setUsernames(state.roomListReducers.rooms);
        console.log("ikk");
        console.log(roomCreated);
    },[state.roomListReducers.rooms,roomCreated]);
  

    const handleClick = (roomId) => {
        console.log(`this is rooom id : ${roomId}`);
        dispatch(selectedRoom(roomId));
    }

    return (
        <div>
            {usernames.map((username) => {
                return (
                    <div key={username._id} className="roomList_wrapper">
                        <button id="roomList_button" onClick={()=>handleClick(username._id)} >
                        <img className="roomList_button_img" src={UserImage} alt="User" /> 
                        <p id="roomList_button_p" >{username.name}</p> 
                        </button>
                    </div>
                )
            })}
        </div>
    )
}


// const mapStateToProps = state => {
//     return  {
//         user_id : state._id    }
// }

//export default connect(mapStateToProps)(RoomList);
export default RoomList ;