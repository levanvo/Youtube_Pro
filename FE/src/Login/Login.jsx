import React, { useEffect } from 'react'
import GoogleButton from "react-google-button";
import axios from "axios";
import "./login.scss"

const Login = () => {

    const client_id = import.meta.env.VITE_API_API_CLIENT_ID;
    const redirect_uri = encodeURIComponent(import.meta.env.VITE_API_API_REDIRECT);
    const scope = encodeURIComponent(import.meta.env.VITE_API_API_SCOPE);
    const response_type = import.meta.env.VITE_API_API_TYPE_OAUTH;
    const loginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=${response_type}`;

    const _handleGoogleLogin = async() => {
        window.location.href = loginUrl;
    };


    return (
        <div className="Area_Login bg-gray-300 h-[100vh] flex justify-center space-x-16">
            <div className=" pt-6 mt-16 w-[350px] h-[250px] scale-[80%] rounded-xl bg-gray-100 opacity-[80%] shadow-md shadow-gray-300 duration-200">
                <h1 className='text-center text-[160%] mb-5 Sigin'>Sign-in</h1>
                <div className="flex justify-center">
                    <GoogleButton onClick={_handleGoogleLogin} style={{ opacity: 1 }} />
                </div>
            </div>
        </div>

    )
}

export default Login
