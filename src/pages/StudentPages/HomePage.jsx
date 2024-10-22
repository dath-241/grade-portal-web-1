import landingImg from '../../assets/img/landingPic.png';
import { Link } from 'react-router-dom';
function HomePage() {
    return (
        <div className="mx-6">
            <div className="mt-[20px] h-[194px] w-[772px] bg-black/25">
                <div className="ml-[30px] pt-[23px] font-['Roboto'] text-[40px] font-semibold leading-[48px] text-white">
                    Vinh danh những sinh viên xuất sắc
                </div>
                <Link to="/frames">
                    <button className="ml-[30px] mt-[45px] h-[60px] w-[130px] bg-[#112d4e] text-white hover:bg-[#112d4ec3]">
                        Xem
                    </button>
                </Link>
            </div>
            <div className="mt-10 flex flex-1 justify-center">
                <img src={landingImg} alt="" className="h-auto w-4/5 object-contain" />
            </div>
        </div>
    );
}
export default HomePage;
