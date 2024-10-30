import { useParams } from 'react-router-dom';
import Switch from './components/switch.component';
import ContentBox from './components/content-box.component';

const gradeList = [
    {
        id: 'CO2039',
        name: 'Lập trình nâng cao',
        group: 'L08',
        exercise: 8,
        lab: 9,
        assignment: 10,
        midTerm: 10,
        final: 8,
        total: 9.5,
    },
];

function GradeInfo() {
    const { id } = useParams();
    const gradeInfo = gradeList.find((grade) => grade.id === id);

    if (!gradeInfo) {
        return <div>Không tìm thấy thông tin điểm số cho môn học này.</div>;
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center text-[40px] text-[#012193]">{gradeInfo.name}</div>
            <div className="w-[1100px]">
                <Switch id={id} active="grade" />
                <div className="my-[10px] ml-[100px] h-[500px] rounded-[20px] border-[1px] bg-white p-[10px] shadow-md">
                    <div className="ml-[30px] text-[35px] font-semibold">Điểm số</div>
                    <hr className="my-[10px] ml-[30px] w-[900px]" />
                    <div className="ml-[30px]">
                        <ul className="flex flex-col gap-[10px]">
                            <li className="flex text-[30px]">
                                <div className="font-semibold">Điểm bài tập : </div>
                                <div className="ml-[5px] font-light">{gradeInfo.exercise}</div>
                            </li>
                            <li className="flex text-[30px]">
                                <div className="font-semibold">Điểm thực hành : </div>
                                <div className="ml-[5px] font-light">{gradeInfo.lab}</div>
                            </li>
                            <li className="flex text-[30px]">
                                <div className="font-semibold">Điểm bài tập lớn : </div>
                                <div className="ml-[5px] font-light">{gradeInfo.assignment}</div>
                            </li>
                            <li className="flex text-[30px]">
                                <div className="font-semibold">Điểm giữa kỳ : </div>
                                <div className="ml-[5px] font-light">{gradeInfo.midTerm}</div>
                            </li>
                            <li className="flex text-[30px]">
                                <div className="font-semibold">Điểm cuối kỳ : </div>
                                <div className="ml-[5px] font-light">{gradeInfo.final}</div>
                            </li>
                            <li className="flex text-[30px]">
                                <div className="font-semibold">Điểm tổng kết : </div>
                                <div className="ml-[5px] font-light">{gradeInfo.total}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GradeInfo;
