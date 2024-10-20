import { Link } from 'react-router-dom';

import logo from '../../assets/img/hcmut.png';
import landingImg from '../../assets/img/landingPic.png';

function Header() {
    return (
        <div className="bg-li mx-6 flex h-[60px] items-center justify-between rounded-2xl bg-gradient-to-r from-[#DBE2EF] to-[#112D4E] px-6">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="size-[45px]" />
                <p className="ml-4 text-xl font-semibold">BK Tra cứu</p>
            </div>
            <button className="rounded-xl bg-white px-4 py-1 font-semibold shadow-inner hover:shadow-primary">
                Đăng nhập
            </button>
        </div>
    );
}

function LandingPage() {
    return (
        <div className="p-4">
            <Header />
            <main className="flex px-12">
                <div className="flex flex-1 flex-col justify-center pl-11 pr-36">
                    <p className="text-3xl font-bold">HỆ THỐNG TRA CỨU ĐIỂM DÀNH CHO</p>
                    <p className="text-3xl font-bold">
                        SINH VIÊN ĐẠI HỌC <span className="text-fourth">BÁCH KHOA</span>
                    </p>
                    <p className="mt-10">
                        <span className="text-lg font-bold text-fourth">#</span> Hệ thống được phát triển dựa trên
                        nhu cầu sử dụng của sinh viên toàn trường. Chúng tôi luôn mang lại trải nghiệm tốt nhất cho sinh
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
