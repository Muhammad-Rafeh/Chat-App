import React, { useState ,useEffect } from 'react'
import ChatButton from './NewRoom';
import UserImage from '../assets/user1.png' ;
import SearchIcon from '../assets/searchIcon.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'; 
import { search } from '../redux/search/searchActions';
import '../App.css' ;
import socketIoClient from 'socket.io-client';
const socket = socketIoClient("http://localhost:5000");   //was initially in use effect line 16


function Nav() {

    useEffect(()=>{
        
        socket.emit("room","tuu mera puatr chutti kar");
    },[])
    
    

    const username = useSelector(state => state.loginReducers.username )

    const [ emailSearch , setEmailSearch ] = useState('');
    
    const dispatch = useDispatch();

    const handleSearch = () => {
         
          dispatch(search(emailSearch));
    }

    const searchUsername = useSelector(state=>state.searchReducers.searchedUser.username);
    const userFound = useSelector(state=>state.searchReducers.userFound);
    
    const handleKeyPress = (event) => {
        if(event.charCode==13){
            handleSearch();
        }
    }

    return (
        <div id="nav_n_search_wrapper" >
            <div className="nav_wrapper">
                <img id="nav_img" src={UserImage} alt="User" /> 
                <p id="nav_username">{username}</p> 
            </div>
            <div id="searchbar_wrapper">
                <input className="email_search" type="email" name="email" onChange={e => setEmailSearch(e.target.value)} value={emailSearch} placeholder="Search by Email" onKeyPress={handleKeyPress}/>
                <input id="nav_searchicon" type="image" src={SearchIcon} alt="search icon"  onClick={handleSearch} />
            </div>
            <hr id="hrForSpace"/>
            {userFound ?  <div id="search_user_wrapper">
                            <div id="search_user_nested_wrapper" >
                                <img id="search_user_img" src={UserImage} alt="User" />
                                <p id="search_user_name">{searchUsername}</p> 
                            </div>
                            <ChatButton />  
                        </div>     
                         : ""}
            
        </div>
        
    )
}

export default Nav
