import { useParams } from 'react-router-dom';
import Switch from './components/switch.component';
import ContentBox from './components/content-box.component';
import { useEffect, useState } from 'react';
import { fetchClassByIdApi } from '../../apis/classInfo.api';

function CourseInfo() {
    const { id } = useParams();
    const api = 'http://localhost:3000/course';
    const [courseInfo, setCourseInfo] = useState(null); // Initialize state to store course data

    useEffect(() => {
        fetchClassByIdApi(id)
        .then((courseDetail) => {
            setCourseInfo(courseDetail); // Update state once data is fetched
        })
        .catch((error) => console.error('Error fetching data:', error));
}, [id]);

    if (!courseInfo) {
        return <div></div>;
    }

    return (
        <div className="mx-6 flex flex-col items-center">
            <div className="my-[10px] flex justify-center text-3xl font-semibold text-[#012193]">
                {courseInfo.name}
            </div>
            <div className="w-[1100px]">
                <Switch id={id} active="info" />
                <ContentBox title="Thông tin chung" courseInfo={courseInfo} type="info" />
            </div>
        </div>
    );
}

export default CourseInfo;
