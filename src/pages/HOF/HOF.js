import React, { useState, useEffect } from 'react';
import './HOF.css';
//sample data
const { HCSDLdata, CNPMdata } = require('./HOFsampledata');

const hallOfFameSize = 10;

const HOF = () => {
    const [selectedCourse, setSelectedCourse] = useState('HCSDL');
    const [renderData, setRenderData] = useState([]);
    const [data, setData] = useState(processData(renderData));

    const handleSelectedCourseChange = (e) => {
        setSelectedCourse(e.target.value);
    };

    const handleReverseButton = () => {
        setData([...data].reverse());
    };

    const getRenderList = (course) => {
        if (course === 'HCSDL') return HCSDLdata;
        else if (course === 'CNPM') return CNPMdata;
        else return [];
    };

    function processData(renderData) {
        let newData = renderData;
        newData.sort((a, b) => b.score - a.score); //sort GPA
        newData = newData.slice(0, hallOfFameSize); //re-size;
        return newData;
    }

    useEffect(() => {
        const newRenderData = getRenderList(selectedCourse);
        setRenderData(newRenderData);
        setData(processData(newRenderData));
    }, [selectedCourse]);

    return (
        <div className="hof-container">
            <div className="filter-section">
                <div className="filter-bar">
                    <button className="fa-solid fa-bars filterIcon" onClick={handleReverseButton}></button>
                    <select className="filter-dropdown" name="course" id="course" onChange={handleSelectedCourseChange}>
                        <option value="HCSDL">Hệ cơ sở dữ liệu - CO3012</option>
                        <option value="CNPM">Công nghệ phần mềm</option>
                    </select>
                </div>

                <h1 className="title">Hall of Fame</h1>
            </div>
            <div className="list">
                {data.map((x, index = 0) => {
                    return (
                        <div className="list-item">
                            <div className="rank">{index + 1}</div>
                            <div className="name">{x.name}</div>
                            <div className="GPA">{x.score}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HOF;
