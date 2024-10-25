import React from 'react';
import './LandingPage2.css';
import HomeImage from '../../assets/img/HomeImage.png';
import HCMUT from '../../assets/img/HCMUT2.png';
import { useNavigate } from 'react-router-dom';

function LandingPage2() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="home">
            <header className="header">
                <div className="logo">
                    <img src={HCMUT} alt="logo" className="logo"></img>
                    BK Tra cứu
                </div>
                <button className="login-button" onClick={handleLogin}>
                    Đăng nhập
                </button>
            </header>
            <main className="main-content">
                <div className="description">
                    <h1 className="homeDescription1">
                        HỆ THỐNG TRA CỨU ĐIỂM DÀNH CHO SINH VIÊN TRƯỜNG ĐẠI HỌC{' '}
                        <span className="highlight">BÁCH KHOA</span>
                    </h1>
                    <p className="homeDescription2">
                        Hệ thống được phát triển dựa trên nhu cầu của sinh viên toàn trường. Chúng tôi luôn mang lại
                        trải nghiệm tốt nhất cho sinh viên
                    </p>
                    <button className="start-button">Bắt đầu ngay</button>
                </div>
                <div className="homeImage">
                    <img src={HomeImage} alt="homeImage" />
                </div>
            </main>
            <footer className="footer">
                {/* left */}
                <div className="contact-info">
                    <div className="left-footer">
                        <div>
                            <img src={HCMUT} alt="hcmut" className="footerLogo" />
                        </div>
                        <div>
                            <p>Liên lạc qua:</p>
                            <p className="align-right"> (434) 546-4356</p>
                            <p className="align-right"> contact@hcmut.com.edu</p>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="footer-links">
                    <a className="footer-link-a" href="http://localhost:3000/">
                        About
                    </a>
                    <a className="footer-link-a" href="https://mybk.hcmut.edu.vn/my/index.action">
                        My Bach Khoa
                    </a>
                    <a className="footer-link-a" href="https://hcmut.edu.vn/">
                        HCMUT
                    </a>
                    <div className="copyright">© 2020 Lift Media. All rights reserved.</div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage2;
