import { useParams } from 'react-router-dom';
import Switch from './components/switch.component';
import LoadMark from '../../components/loadMark';

function GradeInfo() {
    const { id } = useParams();

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center text-[40px] font-[600px] text-[#012193]"></div>
            <div className="w-[1100px]">
                <Switch id={id} active="grade" />
                
                <div className="my-[10px] ml-[100px]  rounded-[20px] border-[1px] bg-white p-[10px] shadow-md">
                    <div className="ml-[30px] text-2xl font-semibold">Điểm số</div>
                    <hr className="my-[10px] ml-[30px] w-[900px]" />
                    <div className="mt-6">
                        <LoadMark />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GradeInfo;
