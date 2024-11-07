import React, { useState } from 'react';
import './Login.css';
import loginHCMUT from '../../assets/img/logoBK.png';
import LoginWithGoogle from './LoginWithGoogle';
import LogoutWithGoogle from './LogoutWithGoogle';

function Login() {
    const [accountTypeVerified, setAccountTypeVerified] = useState(false);

    const handleHCMUTAcccount = () => {
        setAccountTypeVerified(true);
    };
    const handleAdminAccount = () => {
        setAccountTypeVerified(true);
    };

    return (
        <div className="login-container-a">
            <div className="overlay-a"></div>
            <div className="description-a">
                <h1 className="homeDescription1-a">
                    HỆ THỐNG TRA CỨU ĐIỂM DÀNH CHO SINH VIÊN TRƯỜNG ĐẠI HỌC BÁCH KHOA
                </h1>
                <p className="homeDescription2-a">
                    Hệ thống được phát triển dựa trên nhu cầu của sinh viên toàn trường.
                    <br />
                    Chúng tôi luôn mang lại trải nghiệm tốt nhất cho sinh viên.
                </p>
            </div>

            <div className="login-box-a">
                {!accountTypeVerified ? (
                    <div>
                        <div className="HCMUTLogo-a">
                            <img src={loginHCMUT} alt="HCMUT" className="logo-a" />
                        </div>
                        <h2 className="logintext-a">Đăng nhập với tài khoản:</h2>
                        <button className="login-button-a" onClick={handleHCMUTAcccount}>
                            Tài khoản HCMUT ( HCMUT account)
                        </button>
                        <button className="login-button-a" onClick={handleAdminAccount}>
                            Quan trị viên 
                        </button>
                    </div>
                ) : (
                    <div>
                        <LoginWithGoogle />
                        <LogoutWithGoogle />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
