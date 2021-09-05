import React from 'react'
import { useForm } from 'react-hook-form'

//redux
import { useDispatch, useSelector } from 'react-redux';  // useSelector ,
import { login } from '../redux/login/loginActions';
import UserImage from '../assets/user1.png' ; 
import { Link, Redirect } from 'react-router-dom';

function Login() {

    //redux states
    //const { loggingIn , loggedIn } = useSelector;
    const loggedIn = useSelector(state => state.loginReducers.loggedIn);
    const dispatch = useDispatch();
    //

    const{ register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        dispatch(login(data));
    }

    return (
        <div class="auth_bg">
            <div class="auth_user_img_wrapper">
                <img class="auth_user_img" src={UserImage} />
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="auth_input_wrapper">
                   
                    <input class="auth_input" type='text' name='username' ref={register({ required : true , minLength : 3})} placeholder="Username" />
                    {errors.username && <p>Username is invalid</p>}
                </div>
                <div class="auth_input_wrapper">
                    
                    <input class="auth_input" type='text' name='password' ref={register({ required : true , minLength : 3})} placeholder="Password"/>
                    {errors.password && <p>Password is invalid</p>}
                </div>
                <div class="auth_input_wrapper">
                    <input class="auth_button" type='submit'  name="submit" value='Login'/>
                    {   loggedIn ? <Redirect exact to="/app" /> : <Redirect exact to="/" /> }
                    <Link to="/signup" class="auth_link" >or Sign Up</Link>
                </div>
                
            </form>
        </div>
    )
}

export default Login
