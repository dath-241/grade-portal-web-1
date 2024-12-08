import { useParams } from 'react-router-dom';
import Switch from './components/switch.component';
import ContentBox from './components/content-box.component';
import { fetchGradeByIdApi } from '../../apis/classInfo.api';
import { useState, useEffect } from 'react';
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
        return (
            <div className="mx-auto flex w-1/2 flex-col justify-center">
                <div className="flex flex-col">
                    <Switch id={id} active="grade" />
                    <div className="mt-6 h-[500px] rounded-[20px] border-[1px] bg-white p-[10px] shadow-md">
                        <ul className="flex flex-col gap-[10px]">
                            <li className="flex text-lg">
                                <div className="font-semibold">Điểm bài tập : </div>
                                <div className="ml-[5px]">---</div>
                            </li>
                            <li className="flex text-lg">
                                <div className="font-semibold">Điểm thực hành : </div>
                                <div className="ml-[5px]">---</div>
                            </li>
                            <li className="flex text-lg">
                                <div className="font-semibold">Điểm bài tập lớn : </div>
                                <div className="ml-[5px]">---</div>
                            </li>
                            <li className="flex text-lg">
                                <div className="font-semibold">Điểm giữa kì : </div>
                                <div className="ml-[5px]">---</div>
                            </li>
                            <li className="flex text-lg">
                                <div className="font-semibold">Điểm cuối kì : </div>
                                <div className="ml-[5px]">---</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="mx-auto flex w-1/2 flex-col justify-center">
            <div className="my-[10px] flex justify-center text-3xl font-semibold text-[#012193]">
                {gradeInfo.courseName}
            </div>
            <div className="flex flex-col justify-center">
                <Switch id={id} active="grade" />

                <ContentBox title="Điểm số" courseInfo={gradeInfo.Data} type="grade" />
            </div>
        </div>
    );
}

export default GradeInfo;
