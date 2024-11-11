import Switch from './components/switch.component';
import routes from '../../routes';
import { Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchClassByIdApi, fetchCourseInfoApi, fetchGradeByIdApi, fetchTeacherInfoApi } from '../../apis/lecturers';
import CourseInfo from './CourseInfo';
function CourseDetailLayout() {
    const { id } = useParams();
    const [classInfo, setClassInfo] = useState(null); // Initialize state to store course data
    const [gradeInfo, setGradeInfo] = useState(null);
    const [teacherInfo, setTeacherInfo] = useState(null);
    const [courseInfo, setCourseInfo] = useState(null);
    // Call API to get Class Info
    useEffect(() => {
        fetchClassByIdApi(id)
            .then((data) => {
                setClassInfo(data.classDetail); // Update state once data is fetched
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);
    // Call API to get Grade Info
    useEffect(() => {
        fetchGradeByIdApi(id)
            .then((data) => {
                setGradeInfo(data.score.Data); // Update state once data is fetched
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);
    // Call API to get Teacher Info
    useEffect(() => {
        fetchTeacherInfoApi(id)
            .then((data) => {
                // setTeacherInfo(data.score.Data); // Update state once data is fetched
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);
    // Call API to get Course Info
    useEffect(() => {
        fetchCourseInfoApi(id)
            .then((data) => {
                // setCourseInfo(data.score.Data); // Update state once data is fetched
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);
    <div className="mx-6 flex flex-col items-center">
        <div className="my-[10px] flex justify-center text-3xl font-semibold text-[#012193]">{courseInfo.CourseId}</div>
        <div className="w-[1100px]">
            <Switch id={id} active="info" />
            <Routes 
                path={routes.path}
                element={
                    <CourseInfo/>
                }
            />
        </div>
    </div>;
}
export default CourseDetailLayout;
