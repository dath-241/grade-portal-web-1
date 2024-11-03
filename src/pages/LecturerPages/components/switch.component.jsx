import { useNavigate } from "react-router-dom";
const isActive = 'flex h-[50px] w-[150px] items-center justify-center rounded-[10px] text-[30px] font-light bg-primary text-white cursor-pointer'
const isNotActive = 'flex h-[50px] w-[150px] items-center justify-center rounded-[10px] text-[30px] font-light text-black hover:bg-primary hover:text-white cursor-pointer'
function Switch({id, active }) {
    const navigate = useNavigate()
    return (
        <div className="ml-[100px]">
            <ul className="flex w-[280px] rounded-[15px] border-primary bg-white">
                <li className={active === 'info' ? isActive : isNotActive} 
                    onClick={() => navigate(`/lectuer-course/${id}/info`)}
                >
                     Thông tin
                </li>
                <li className={active === 'grade' ? isActive : isNotActive} 
                  onClick={() => navigate(`/lectuer-course/${id}/grade`)}
                >
                     Điểm số
                </li>
            </ul>
        </div>
    );
}
export default Switch
