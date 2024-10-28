import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { clientID } from './config';
import { jwtDecode } from 'jwt-decode'; //decode the Google response to get user email

//navigate to
let navigatePlace = '/home';
//list accounts
let teacherEmails = ['nguyendinhbang53@gmail.com', 'abc@gmail.com'];
let adminEmails = ['nguyendinhbang53az@gmail.com', 'ghi@gmail.com'];
//

let getRoles = (email) => {
    if (teacherEmails.includes(email)) return 'teacher';
    else if (adminEmails.includes(email)) return 'admin';
    return 'student';
};

function getUserEmail(res) {
    let result = jwtDecode(res.credential);
    if (result) return result.email;
    return '';
}

function LoginWithGoogle() {
    const navigate = useNavigate();
    const onSuccess = (response) => {
        let userEmail = getUserEmail(response);
        console.log('Login with Google success');
        console.log('email:', userEmail);
        console.log('role:', getRoles(userEmail));
        navigate(navigatePlace);
    };
    const onFailure = (response) => {
        alert('Login with Google failed: ', response.error);
    };

    return (
        <GoogleOAuthProvider clientId={clientID}>
            <div className="LoginWithGoogle">
                <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
            </div>
        </GoogleOAuthProvider>
    );
}

export default LoginWithGoogle;
