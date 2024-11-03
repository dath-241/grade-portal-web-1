import { useNavigate } from 'react-router-dom';
const isActive =
    'flex h-[50px] w-[160px] items-center justify-center rounded-[5px] text-[30px] font-light bg-primary text-white cursor-pointer';
const isNotActive =
    'flex h-[50px] w-[160px] items-center justify-center rounded-[5px] text-[30px] font-light text-black hover:bg-primary hover:text-white cursor-pointer';
function Switch({ id, active }) {
    const navigate = useNavigate();
    return (
        <div className="ml-[100px]">
            <ul className="flex w-[280px] rounded-[10px] border border-gray-500 bg-white overflow-hidden
            ">
                <li
                    className={active === 'info' ? isActive : isNotActive}
                    onClick={() => navigate(`/student-course/${id}/info`)}
                >
                    Thông tin
                </li>
                <li className={active === 'grade' ? isActive : isNotActive} 
                  onClick={() => navigate(`/student-course/${id}/grade`)}
                >
                    Điểm số
                </li>
            </ul>
        </div>
    );
}
export default Switch;
