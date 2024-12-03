import { useParams } from 'react-router-dom';
import Switch from './components/switch.component';
import ContentBox from './components/content-box.component';
import { fetchGradeByIdApi } from '../../apis/classInfo.api';
import { useState, useEffect,  } from 'react';
function GradeInfo() {
    const { id } = useParams();
    const [gradeInfo, setGradeInfo] = useState(null); // Initialize state to store course data
    useEffect(() => {
        fetchGradeByIdApi(id)
            .then((scoreInfo) => {
                setGradeInfo(scoreInfo); // Update state once data is fetched
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);

    if (!gradeInfo) {
        return <div></div>;
    }
    return (
        <div className="mx-6 flex flex-col items-center">
            <div className="my-[10px] flex justify-center text-3xl font-semibold text-[#012193]">{gradeInfo.courseName}</div>
            <div className="w-[1100px]">
                <Switch id={id} active="grade" />
                <ContentBox title="Điểm số" courseInfo={gradeInfo.Data} type="grade" />
            </div>
        </div>
    );
}

export default GradeInfo;