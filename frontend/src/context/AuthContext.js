import React from "react";
import jwt_decode from "jwt-decode";
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    //localStorage.getItem('authTokens')
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    let loginUser = async (values) => {
        console.log('Form Submitted');
        let response = await fetch('http://127.0.0.1:8000/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.username,
                password: values.password,
            })
        })
        console.log(response);
        let data = await response.json()
        console.log('data', data);
        console.log('access', data.access);
        console.log('refresh', data.refresh);
        if (response.status === 200) {
            setAuthTokens(data)
            const decodedToken = jwt_decode(data.access);
            console.log('decodedToken', decodedToken);
            setUser(decodedToken);
            console.log(decodedToken.user_id);
            console.log(authTokens);
            //console.log('User', user);
            localStorage.setItem('authTokens', JSON.stringify(data));
            navigate('/home');

        }
    }

    let logoutUser = ()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens');
        navigate('/');

    }

    let contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser : logoutUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}