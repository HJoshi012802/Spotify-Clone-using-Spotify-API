import React from 'react';
import './Login.css'
import{Link} from 'react-router-dom'
import { loginUrl } from './spotify';

const Login = () => {
    return ( 
        <div className='Login'>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='logo'/>
            
            <Link className='Login-link' to={loginUrl}> LOGIN WITH SPOTIFY</Link>
        </div>
     );
}
 
export default Login;