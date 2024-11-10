import React, { useState, useEffect, useCallback } from 'react';
import './HOF.css';

// const GPAapi = 'http://localhost:5200/data';


const classId = '672b87af226ae67ef9aaa047';
const GPAapi = `https://canxphung.id.vn/admin/api/resultScore/${classId}`;

const hallOfFameSize = 10;

const HOF = () => {
    const [selectedCourse, setSelectedCourse] = useState('HCSDL');
    const [renderData, setRenderData] = useState([]);
    const [GPAdata, setGPAdata] = useState({});
    const [data, setData] = useState(processData(renderData));

    const handleSelectedCourseChange = (e) => {
        setSelectedCourse(e.target.value);
    };

    const handleReverseButton = () => {
        setData([...data].reverse());
    };

    useEffect(() => {
        fetch(GPAapi, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => setGPAdata(data))
            .catch((err) => console.log('error while fetching GPA data: ', err));
    }, []);

    useEffect(() => {
        console.log('GPA data: ', GPAdata);
    }, [GPAdata]);

    const getRenderList = useCallback(
        (course) => {
            if (course === 'HCSDL') return GPAdata.HCSDLdata || [];
            else if (course === 'CNPM') return GPAdata.CNPMdata || [];
            else return [];
        },
        [GPAdata],
    );

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
    }, [selectedCourse, GPAdata, getRenderList]);

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
                {data.map((x, index) => {
                    return (
                        <div className="list-item" key={index}>
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
