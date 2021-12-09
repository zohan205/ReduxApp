import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div className="extra content" >
            <button className="ui primary button" onClick={ ()=>{dispatch(login({name: "Papan", age: 25, email: "gourab@gmail.com"}))} } >Login</button>
            <button className="ui button" onClick={ ()=>{dispatch(logout()); } } >LogOut</button>
        </div>
    )
}

export default Login
