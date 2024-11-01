import { useNavigate } from 'react-router-dom';
const isActive =
    'flex  items-center justify-center rounded-[10px] text-lg px-4 py-2  bg-primary text-white cursor-pointer';
const isNotActive =
    'flex  items-center justify-center rounded-[10px] text-lg px-4 py-2  text-black hover:bg-primary hover:text-white cursor-pointer';
function Switch({ id, active }) {
    const navigate = useNavigate();
    return (
        <div className="ml-[100px]">
            <ul className="flex w-fit rounded-[15px] border-[2px] border-primary bg-white">
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
