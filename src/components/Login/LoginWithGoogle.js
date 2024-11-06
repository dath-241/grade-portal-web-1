import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { clientID } from './config';
import { bypassLogin } from './config';

// const loginAPI = 'https://canxphung.id.vn/admin/api/login'; //server của BE

const loginAPI = 'http://localhost:10000/admin/api/login'; //server trên local

const navigatePlace = '/home'; //route navigate tới khi đã login thành công

function LoginWithGoogle() {
    const navigate = useNavigate();
    //list accounts
    // let teacherEmails = ['nguyendinhbang53@gmail.com', 'abc@gmail.com'];
    // let adminEmails = ['nguyendinhbang53az@gmail.com', 'ghi@gmail.com'];

    // let getRoles = (email) => {
    //     if (teacherEmails.includes(email)) return 'teacher';
    //     else if (adminEmails.includes(email)) return 'admin';
    //     return 'student';
    // };

    // function getUserEmail(res) {
    //     let result = jwtDecode(res.credential);
    //     if (result) return result.email;
    //     return '';
    // }

    //gửi idToken về server
    // function sendIdTokenToBackend(idToken) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('POST', loginAPI);
    //     xhr.setRequestHeader('Content-Type', 'application/json');
    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState === 4) {
    //             if (xhr.status === 200) {
    //                 const response = JSON.parse(xhr.responseText);
    //                 console.log('ID Token đã được gửi thành công.');
    //                 console.log('⭕ Server response:', response);
    //                 if (response.code) {
    //                     console.log('⭕ Code from server:', response.code);
    //                     // setServerResponse(response.code);
    //                 }
    //             } else {
    //                 console.error('Lỗi khi gửi ID Token:', xhr.responseText);
    //             }
    //         }
    //     };
    //     xhr.send(JSON.stringify({ idToken: idToken }));
    // }

    async function sendIdTokenToServer(idToken) {
        try {
            const response = await fetch(loginAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idToken: idToken }),
            });
            const data = await response.json();
            console.log('Server response:', data);
            return data.code;
        } catch (error) {
            console.error('Error while sending idToken to server:', error);
        }
    }

    function saveLoginState(idToken) {
        const now = new Date();
        const expirationTime = now.getTime() + 3600 * 1000 * 24; //24h
        const loginState = {
            idToken: idToken,
            expirationTime: expirationTime,
        };
        localStorage.setItem('loginState', JSON.stringify(loginState));
    }

    function getValidIdToken() {
        const loginState = JSON.parse(localStorage.getItem('loginState'));
        if (loginState) {
            const now = new Date();
            if (now.getTime() < loginState.expirationTime) {
                return loginState.idToken;
            } else {
                localStorage.removeItem('loginState');
            }
        }
        return null;
    }

    //nếu đăng nhập thành công -> Google trả về response
    const onSuccess = async (response) => {
        //lấy idToken từ storage
        if (bypassLogin) {
            console.log('Bypass login');
            navigate(navigatePlace);
            return;
        }

        const storageToken = getValidIdToken();
        //nếu có, navigate
        if (storageToken) {
            console.log('Already logged in');
            console.log('Token valid until: ', new Date(JSON.parse(localStorage.getItem('loginState')).expirationTime));
            navigate(navigatePlace);
            return;
            //nếu không, gửi idToken về server
        } else {
            //sendIdTokenToBackend(response.credential); //gửi idToken về server
            const serverResponse = await sendIdTokenToServer(response.credential); //gửi idToken về server
            if (serverResponse && serverResponse === 'Success') {
                //nhận response từ server
                // let userEmail = getUserEmail(response);
                // const role = getRoles(userEmail);
                // setUserRole(role);
                navigate(navigatePlace);
                saveLoginState(response.credential);

                console.log('Login with Google success');
                // console.log('email:', userEmail);
                // console.log('role:', getRoles(userEmail));
                console.log('Gooogle response:', response);
            } else {
                //khi server trả về lỗi
                console.log('Error while login:', serverResponse);
            }
        }
    };

    //
    //nếu đăng nhập Google thất bại
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
