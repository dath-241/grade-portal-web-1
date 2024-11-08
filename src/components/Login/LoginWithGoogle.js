import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { clientID } from './config';
import { bypassLogin } from './config';
import { useContext } from 'react';
import { UserContext } from './UserContext';

// const loginAdminAPI = 'https://canxphung.id.vn/admin/api/login';
// const loginUserAPI = 'https://canxphung.id.vn/api/login';

const loginAPI = 'http://localhost:10000/admin/api/login'; //server trên local

const navigatePlace = '/home'; //route navigate tới khi đã login thành công

function LoginWithGoogle() {
    const navigate = useNavigate();
    const { setUserRole } = useContext(UserContext);

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
            //sendIdTokenToBackend(response.credential); //gửi idToken về server
            const serverResponse = await sendIdTokenToServer(response.credential); //gửi idToken về server
            if (serverResponse && serverResponse.code === 'Success') {
                //nhận response từ server
                setUserRole(serverResponse.role);
                localStorage.setItem('userRole', serverResponse.role);
                navigate(navigatePlace);
                saveLoginState(response.credential);
                console.log('Login with Google success');
                console.log('Gooogle response:', response);
            } else {
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
