import { Link } from 'react-router-dom';

import logo from '../../assets/img/logoBK.png';
import landingImg from '../../assets/img/landingPic.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };
    return (
        <div className="mx-6 flex h-[60px] items-center rounded-2xl bg-opacity-10 bg-gradient-to-r from-[#DBE2EF] to-[#64768C] px-6 py-4">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="size-[45px]" />
                <p className="ml-4 text-xl font-semibold">BK Tra cứu</p>
            </div>
            <button
                className="ml-auto rounded-full bg-white px-4 py-1 font-semibold shadow-inner hover:shadow-primary"
                onClick={handleLogin}
            >
                Đăng nhập
            </button>
        </div>
    );
}

function LandingPage() {
    return (
        <div className="pt-[1rem]">
            <Header />
            <main className="mx-6 flex">
                <div className="flex flex-1 flex-col justify-center pl-11 pr-36">
                    <p className="text-3xl font-bold">HỆ THỐNG TRA CỨU ĐIỂM DÀNH CHO</p>
                    <p className="text-3xl font-bold">
                        SINH VIÊN ĐẠI HỌC <span className="text-fourth">BÁCH KHOA</span>
                    </p>
                    <p className="mt-10">
                        <span className="text-lg font-bold text-fourth">#</span> Hệ thống được phát triển dựa trên nhu
                        cầu sử dụng của sinh viên toàn trường. Chúng tôi luôn mang lại trải nghiệm tốt nhất cho sinh
                        viên.
                    </p>
                    <Link to="/home" className="mt-6 size-fit">
                        <button className="mr-auto rounded-xl bg-primary px-4 py-2 font-medium text-white shadow-inner hover:shadow-white">
                            Tra cứu điểm
                        </button>
                    </Link>
                </div>
                <div className="mt-10 flex flex-1 justify-center">
                    <img src={landingImg} alt="" className="w-4/5 object-contain" />
                </div>
            </main>
        </div>
    );
}

export default LandingPage;
