import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { loginService } from '../../services';

const Login = () => {
    const { saveToken, user: token } = useContext(UserContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        const user = await loginService(dataObject);
        saveToken(user.detail);
        e.target.reset();
    };
    const redirect = <Navigate to='/' />

    return (
        token
            ? redirect
            : <form onSubmit={onSubmit} >
                <input type="text" placeholder="Email" name="mail" />
                <br /><br />
                <input type="password" placeholder="Password" name="password" />
                <br /><br />
                <input type="submit" value="Login" />
            </form>
    )
}

export default Login
