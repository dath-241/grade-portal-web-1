import './Header.css';
import HCMUT from '../../assets/img/HCMUT2.png';
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="right-header">
                <img src={HCMUT} alt="HCMUT" className="hcmutLogo"></img>
                BK Tra cứu
            </div>
            <div className="left-header">
                <nav className="navigation">
                    <a className="nav-a" href="/home">
                        Trang chủ
                    </a>
                    <a className="nav-a" href="/courses">
                        Khóa học
                    </a>
                    <a className="nav-a" href="/hof">
                        Vinh danh
                    </a>
                </nav>
                <div className="profile-pic"></div>
            </div>
        </header>
    );
};

export default Header;
