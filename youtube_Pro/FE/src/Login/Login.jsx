import React from 'react'
import GoogleButton from "react-google-button";
import "./login.scss"
const Login = () => {

    const _handleGoogleLogin = () => {
        const client_id = import.meta.env.VITE_API_API_CLIENT_ID;
        const redirect_uri = encodeURIComponent(import.meta.env.VITE_API_API_REDIRECT);
        const scope = encodeURIComponent(import.meta.env.VITE_API_API_SCOPE);
        const response_type = import.meta.env.VITE_API_API_TYPE_OAUTH;

        const loginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=${response_type}`;
        window.location.href = loginUrl;
    };

    return (
        <div className="Area_Login">
            <div className="flex justify-center mt-20">
                <GoogleButton onClick={_handleGoogleLogin} />
            </div>
        </div>
    )
}

export default Login