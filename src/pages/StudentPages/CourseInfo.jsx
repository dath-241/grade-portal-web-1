import { useParams } from 'react-router-dom';
import Switch from './components/switch.component';
import ContentBox from './components/content-box.component';
const courseList = [
    {
        id: 'CO2039',
        img: 'https://via.assets.so/movie.png?id=1&q=95&w=190&h=120&fit=fill',
        name: 'Lập trình nâng cao',
        teacher: 'Lê Đình Thuận',
        semester: 'HK221',
        group: 'L08',
        status: 'Đang diễn ra',
        
    },
];
function CourseInfo() {
    const { id } = useParams();
    const courseInfo = courseList.find((course) => course.id === id);
    return (
        <div className="mx-6 flex flex-col items-center">
            <div className="flex justify-center text-[40px] text-[#012193]">{courseInfo.name}</div>
            <div className='w-[1100px]'>
                <Switch id={id} active="info" />
                <ContentBox title="Thông tin chung" courseInfo={courseInfo} />
            </div>
        </div>
    );
}
export default CourseInfo;
