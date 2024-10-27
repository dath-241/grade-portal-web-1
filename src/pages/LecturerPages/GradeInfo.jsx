import { useParams } from 'react-router-dom';
import Switch from './components/switch.component';
import ContentBox from './components/content-box.component';

function GradeInfo() {
    const { id } = useParams();
    
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center text-[40px] font-[600px] text-[#012193]"></div>
            <div className="w-[1100px]">
                <Switch id={id} active="grade" />
                <ContentBox title="Điểm số" />
            </div>
        </div>
    );
}
export default GradeInfo;
