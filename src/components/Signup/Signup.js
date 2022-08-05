import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
// Importamos el contexto
import { UserContext } from '../../context/UserContext'
import { signupService } from '../../services'

const Signup = () => {
    // Desestrcuturamos los elementos necesarios
    const { saveToken, user: token } = useContext(UserContext);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        const user = await signupService(dataObject)
        // Usamos lo que necesitamos
        saveToken(user.detail)
        e.target.reset();
    };
    
    const redirect = <Navigate to='/' />

    return (
        token ?
            redirect
            : <form onSubmit={onSubmit} >
                <input type="text" placeholder="Nombre" name="firstname" />
                <br /><br />
                <input type="text" placeholder="Email" name="mail" />
                <br /><br />
                <input type="password" placeholder="Password" name="password" />
                <br /><br />
                <input type="submit" value="Signup" />
                <br /><br />
                <br /><br />
                <br /><br />
            </form >
    )
}

export default Signup
