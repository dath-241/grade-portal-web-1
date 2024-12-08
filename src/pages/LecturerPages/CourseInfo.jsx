import { useParams } from 'react-router-dom';
import Switch from './components/switch.component';
import ContentBox from './components/content-box.component';
import { useEffect, useState } from 'react';
import { fetchClassByIdApi } from '../../apis/classInfo.api';

function CourseInfo() {
    const { id } = useParams();
    const [courseInfo, setCourseInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourseInfo = async () => {
            try {
                const response = await fetchClassByIdApi(id);
                setCourseInfo(response);
                setLoading(false);
            } catch (error) {
                setError(error);
            } 
        }
        fetchCourseInfo();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }
  

    if (error) {
        return <div>Error: {error.message}</div>; 
    }

    if (!courseInfo) {
        return <div>No course information found.</div>; 
    }

    return (
        <div className="mx-6 flex flex-col items-center">
            <div className="my-[10px] flex justify-center text-3xl font-semibold text-[#012193]">
                {courseInfo.courseName}
            </div>
            <div className="w-[1100px]">
                <Switch id={id} active="info" />
                <ContentBox title="Thông tin chung" courseInfo={courseInfo} />
            </div>
        </div>
 );
}

export default CourseInfo;