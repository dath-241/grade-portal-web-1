import { useParams } from 'react-router-dom';
import Switch from './components/switch.component';
const courseList = [
    {
        id: 'CO2039',
        name: 'Lập trình nâng cao',
        exercise: '10',
        practice: '10',
        bigExercise: '10',
        midTerm: '10',
        finalTerm: '10',
        average: '10',
    },
];

function GradeInfo() {
    const { id } = useParams();
    const courseInfo = courseList.find((course) => course.id === id);
    return (
        <div className="flex flex-col items-center">
            <div className="mb-4 flex justify-center text-3xl font-semibold text-[#012193]">{courseInfo.name}</div>
            <div className="w-[1100px]">
                <Switch id={id} active="grade" />
                <div className="my-6 ml-[100px] h-[500px] rounded-[20px] border-[1px] bg-white p-[10px] shadow-md">
                    <div className="ml-[30px] text-xl font-semibold">Điểm số</div>
                    <hr className="my-[10px] ml-[30px] w-[900px]" />
                    <div className="ml-[30px] pt-4">
                        <ul className="flex flex-col gap-4">
                            <li className="flex text-lg">
                                <div className="font-semibold">Điểm bài tập : </div>
                                <div className="ml-[5px]">{courseInfo.exercise}</div>
                            </li>
                            <li className="flex text-lg">
                                <div className="font-semibold">Điểm Thực hành : </div>
                                <div className="ml-[5px]">{courseInfo.practice}</div>
                            </li>
                            <li className="flex text-lg">
                                <div className="font-semibold">Điểm bài tập lớn : </div>
                                <div className="ml-[5px]">{courseInfo.bigExercise}</div>
                            </li>
                            <li className="flex text-lg">
                                <div className="font-semibold">Điểm giữa kỳ : </div>
                                <div className="ml-[5px]">{courseInfo.midTerm}</div>
                            </li>
                            <li className="flex text-lg">
                                <div className="font-semibold">Điểm cuối kỳ : </div>
                                <div className="ml-[5px]">{courseInfo.finalTerm}</div>
                            </li>
                            <li className="flex text-lg">
                                <div className="font-semibold">Điểm tổng kết : </div>
                                <div className="ml-[5px]">{courseInfo.finalTerm}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GradeInfo;
