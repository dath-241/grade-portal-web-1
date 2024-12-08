import React from 'react';
import unauthorizeImage from '../../assets/img/401.png';
import LogoutWithGoogle from './LogoutWithGoogle';
import { useNavigate } from 'react-router-dom';

function Unauthorize() {
    const navigate = useNavigate();
    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img src={unauthorizeImage} alt="Unauthorized" style={styles.image} />
            </div>
            <div style={styles.content}>
                <p style={styles.message}>Bạn không có quyền truy cập vào trang này</p>
                <p style={styles.errorCode}>Error code: 403 - Unauthorized</p>
                <button style={styles.button} onClick={() => navigate('/home')}>
                    Trở về trang chủ
                </button>
                <div style={styles.logoutContainer}>
                    <LogoutWithGoogle />
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        width: '100%',
    },
    image: {
        width: '50%',
        height: 'auto',
    },
    content: {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    message: {
        fontSize: '1.2em',
        marginBottom: '10px',
    },
    errorCode: {
        color: '#dc3545',
        marginBottom: '20px',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#ffffff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
        transform: 'translateY(-30px)',
    },
    logoutContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
};

export default Unauthorize;
