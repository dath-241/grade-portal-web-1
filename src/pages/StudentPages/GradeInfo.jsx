import { useParams } from 'react-router-dom';
import Switch from './components/switch.component';
import ContentBox from './components/content-box.component';

import { useState ,useEffect } from 'react';
function GradeInfo() {
    const { id } = useParams();
    const api = `http://localhost:3000/course?id=${id}`;
    const [gradeInfo, setGradeInfo] = useState(null); 

    useEffect(() => {
        fetch(api)
            .then((response) => response.json())
            .then((json) => {
                const course = json.find((course) => course.id === id);
                setGradeInfo(course); 
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id, api]); 

    if (!gradeInfo) {
        return <div></div>; 
    }

    return (
        <div className="mx-6 flex flex-col items-center">
            <div className="flex justify-center text-[40px] font-[600px] text-[#012193] my-[10px]">
                {gradeInfo.name}
            </div>
            <div className="w-[1100px]">
                <Switch id={id} active="grade" />
                <ContentBox title="Điểm số" courseInfo={gradeInfo} type="grade" />
            </div>
        </div>
    );
}

export default GradeInfo;
