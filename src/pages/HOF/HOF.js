import React from 'react';
import './HOF.css';

const HOF = () => {
    return (
        <div className="hof-container">
            <div className="filter-section">
                <div className="filter-bar">
                    <i className="fa-solid fa-bars filterIcon"></i>
                    <select className="filter-dropdown">
                        <option>Cơ sở dữ liệu - CO3012</option>
                    </select>
                </div>

                <h1 className="title">Hall of Frame</h1>
            </div>
            <div className="list">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="list-item">
                        <div className="rank">{`0${index + 1}`}</div>
                        <div className="name">Nguyễn Văn A</div>
                        <div className="score">4.0</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HOF;
