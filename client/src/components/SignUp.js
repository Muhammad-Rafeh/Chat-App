import React from 'react'
import { useForm } from 'react-hook-form'
import UserImage from '../assets/user1.png' ; 
//redux
import { useDispatch, useSelector } from 'react-redux';  // useSelector ,
import { signUp} from '../redux/signUp/signUpActions';
import { Link , Redirect } from 'react-router-dom';

function SignUp() {

    //redux states
    //const { loggingIn , loggedIn } = useSelector;
    const signedIn = useSelector(state=>state.signUpReducer.signedIn); 

    const dispatch = useDispatch();
    //

    const{ register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        dispatch(signUp(data));
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
                    <input class="auth_input" type="email" name="email" ref={register({ required : true, minlength : 3 })} placeholder="Email" />
                    {errors.username && <p>email is invalid</p>}
                </div>
               
                <div class="auth_input_wrapper">
                    
                    <input class="auth_input" type='text' name='password' ref={register({ required : true , minLength : 3})} placeholder="Password"/>
                    {errors.password && <p>Password is invalid</p>}
                </div>

                <div class="auth_input_wrapper">
                    <input class="auth_button" type='submit'  name="submit" value='SignUp'/>
                    <Link exact to="/" class="auth_link"> or Login</Link>
                    { signedIn ? <Redirect to="/" /> : ""}
                </div>
                
            </form>
        </div>
    )
}

export default SignUp;
