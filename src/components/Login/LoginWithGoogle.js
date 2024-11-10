import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import { bypassLogin, clientID, loginAdminAPI, loginUserAPI, navigatePlace } from './config';

function LoginWithGoogle({ accountType }) {
    const navigate = useNavigate();
    const { setUserRole } = useContext(UserContext);

    async function sendIdTokenToServer(idToken) {
        //gửi token về api tương ứng
        const apiURL = accountType === 'admin' ? loginAdminAPI : loginUserAPI;
        try {
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idToken: idToken }),
            });
            console.log('idToken:', idToken);
            const data = await response.json();
            console.log('Server: ', apiURL);
            console.log('Server response:', data);

            //Lưu token vào localStorage
            //sử dụng cho các request sau
            if (data.token) {
                console.log('Token:', data.token);
                localStorage.setItem('token', data.token);
            }
            //ví dụ lấy token từ localStorage:
            // const token = localStorage.getItem('token');

            return data; // Return the entire data object
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
            setUserRole('admin');
            localStorage.setItem('userRole', 'admin');
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
            const serverResponse = await sendIdTokenToServer(response.credential); //gửi idToken về server
            if (serverResponse && serverResponse.code === 'Success') {
                //nhận response từ server
                //nếu server không trả về role -> đăng nhập bằng admin
                if (!serverResponse.role) {
                    setUserRole('admin');
                    localStorage.setItem('userRole', 'admin');
                } else {
                    setUserRole(serverResponse.role);
                    localStorage.setItem('userRole', serverResponse.role);
                }

                navigate(navigatePlace);
                saveLoginState(response.credential);
                console.log('Login with Google success');
                console.log('Gooogle response:', response);
                console.log('User role: ', serverResponse.role || 'admin');
            } else {
                console.log('Error while login or server is down:', serverResponse);
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
