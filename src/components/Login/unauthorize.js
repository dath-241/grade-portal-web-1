import React from 'react';
import unauthorizeImage from '../../assets/img/401.png';

function Unauthorize() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={unauthorizeImage} alt="Unauthorized" style={{ width: '50%', height: 'auto' }} />
        </div>
    );
}

export default Unauthorize;
