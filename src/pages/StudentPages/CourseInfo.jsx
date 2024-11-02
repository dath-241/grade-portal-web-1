import { useParams } from 'react-router-dom';
import Switch from './components/switch.component';
import ContentBox from './components/content-box.component';
import { useEffect, useState } from 'react';

function CourseInfo() {
    const { id } = useParams();
    const api = 'http://localhost:3000/course';
    const [courseInfo, setCourseInfo] = useState(null); // Initialize state to store course data

    useEffect(() => {
        fetch(api)
            .then((response) => response.json())
            .then((json) => {
                const course = json.find((course) => course.id === id);
                setCourseInfo(course); // Update state once data is fetched
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id, api]); 

    if (!courseInfo) {
        return <div></div>; 
    }

    return (
        <div className="mx-6 flex flex-col items-center">
            <div className="flex justify-center text-[40px] font-[600px] text-[#012193] my-[10px]">
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
