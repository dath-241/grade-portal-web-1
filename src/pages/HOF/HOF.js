import React, { useState, useEffect } from 'react';
import './HOF.css';
import { HALLOFFAME_LIST_API_URL, MAPPING_ID_TO_NAME_API_URL } from '../../constants/api';

const HOF = () => {
    const [data, setData] = useState([]);
    const [courseList, setCourseList] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [renderData, setRenderData] = useState([]);
    const [courseNameList, setCourseNameList] = useState([]);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        fetchGPA();
    }, []);

    async function fetchGPA() {
        try {
            const response = await fetch(`${HALLOFFAME_LIST_API_URL}`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error while fetching data:', error);
        }
    }

    async function setCourseListData() {
        try {
            if (data) {
                console.log('data: ', data);
                let courseIdList = [];
                if (data.data && Array.isArray(data.data.tier)) {
                    courseIdList = data.data.tier.map((item) => item.course_id);
                }
                if (courseIdList) setCourseList(courseIdList);
                if (courseIdList.length > 0 && !selectedCourse) {
                    setSelectedCourse(courseIdList[0]);
                }
                console.log('courseIdList: ', courseIdList);
            }
        } catch (error) {
            console.log('Error while setting course data: ', error);
        }
    }

    function handleCourseChange(e) {
        setSelectedCourse(e.target.value);
    }

    const handleReverseClick = () => {
        setReverse(!reverse);
    };

    useEffect(() => {
        fetchGPA();
    }, []);

    useEffect(() => {
        setCourseListData(); // eslint-disable-next-line
    }, [data]);

    useEffect(() => {
        console.log('selectedCourse: ', selectedCourse);
        if (data && data.data && data.data.tier) {
            const renderCourse = data.data.tier.find((element) => element.course_id === selectedCourse);
            if (renderCourse) setRenderData(renderCourse.data);
        }
        console.log('render Data: ', renderData); // eslint-disable-next-line
    }, [selectedCourse]);

    useEffect(() => {
        const fetchCourseNames = async () => {
            const courseNameList = await Promise.all(
                // lần lượt lấy các course id và mapping sang course name
                // -> promise all trả về mảng các course name theo đúng thứ tự
                courseList.map(async (courseId) => {
                    const response = await fetch(MAPPING_ID_TO_NAME_API_URL(courseId), {
                        method: 'GET',
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token'),
                            'Content-Type': 'application/json',
                        },
                    });
                    const data = await response.json();
                    return data.course.Name;
                }),
            );
            setCourseNameList(courseNameList);
        };

        fetchCourseNames(); // eslint-disable-next-line
    }, [selectedCourse]);
    return (
        <div className="hof-container">
            <div className="filter-section">
                <div className="filter-bar">
                    <button className="fa-solid fa-bars filterIcon" onClick={handleReverseClick}></button>
                    <select className="filter-dropdown" name="course" id="course" onChange={handleCourseChange}>
                        {courseList &&
                            courseList.map((courseId, index) => {
                                return (
                                    <option value={courseId} key={courseId}>
                                        {courseNameList[index]}
                                    </option>
                                );
                            })}
                    </select>
                </div>

                <h1 className="title">Hall of Fame</h1>
            </div>
            <div className="list">
                {(reverse ? [...renderData].reverse() : renderData).map((student, index) => {
                    return (
                        <div className="list-item" key={index}>
                            <div className="rank">{index + 1}</div>
                            <div className="name">{student.mssv}</div>
                            <div className="GPA">{student.dtb}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HOF;
