import { useNavigate } from 'react-router-dom';

const isActive =
    'flex py-2 w-[150px] items-center justify-center rounded-[10px] text-xl  bg-primary text-white cursor-pointer';
const isNotActive =
    'flex py-2 w-[150px] items-center justify-center rounded-[10px] text-xl  text-black hover:bg-primary hover:text-white cursor-pointer';

function Switch({ id, active }) {
    const navigate = useNavigate();
    return (
        <div className="flex">
            <ul className="flex overflow-hidden rounded-[10px] border border-gray-500 bg-white">
                <li
                    className={active === 'info' ? isActive : isNotActive}
                    onClick={() => navigate(`/student-course/${id}/info`)}
                >
                    Thông tin
                </li>
                <li
                    className={active === 'grade' ? isActive : isNotActive}
                    onClick={() => navigate(`/student-course/${id}/grade`)}
                >
                    Điểm số
                </li>
            </ul>
        </div>
    );
}
export default Switch;
