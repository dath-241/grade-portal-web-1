import React, { useState } from 'react';
import './Login.css';
import loginHCMUT from '../../assets/img/logoBK.png';
import { useNavigate } from 'react-router-dom';
import LoginWithGoogle from './LoginWithGoogle';
import LogoutWithGoogle from './LogoutWithGoogle';

function Login() {
    const [accountTypeVerified, setAccountTypeVerified] = useState(false);
    const navigate = useNavigate();

    const handleHCMUTAcccount = () => {
        setAccountTypeVerified(true);
    };
    const handleAdminAccount = () => {
        setAccountTypeVerified(true);
    };

    const handleLogin = () => {
        setAccountTypeVerified(false);
        navigate('/hof');
    };
    const handleForgotPassword = () => {
        //
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
                            Admin
                        </button>
                    </div>
                ) : (
                    <div>
                        {/* <h2 className="logintext-a">Đăng nhập vào tài khoản</h2>
                        <div className="email-input-container-a">
                            <label htmlFor="email" className="email-label-a">
                                Email:
                            </label>
                            <input type="email" id="email" className="email-input-a" />
                        </div>
                        <div className="remember-forgot-container-a">
                            <label className="remember-me-a">
                                <input type="checkbox" id="remember-me" className="checkBox-a" />
                                Remember me
                            </label>
                            <button className="forgot-password-a" onClick={handleForgotPassword}>
                                Forgot password?
                            </button>
                        </div>
                        <button className="login-button-a" onClick={handleLogin}>
                            Đăng nhập
                        </button> */}
                        <div>
                            <LoginWithGoogle />
                            {/* <LogoutWithGoogle /> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
