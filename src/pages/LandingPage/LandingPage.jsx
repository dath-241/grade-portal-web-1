import logo from '../../assets/img/hcmut.png';
import landingImg from '../../assets/img/landingPic.png';

function Header() {
    return (
        <div className="flex h-[60px] items-center justify-between rounded-full bg-primary px-12">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="size-[35px]" />
            </div>
            <button className="px-4 py-1 bg-white rounded-full shadow-inner  hover:shadow-secondary font-semibold ">
                Đăng nhập
            </button>
        </div>
    );
}

function LandingPage() {
    return (
        <div className=" p-4">
            <Header />
            <main className="flex px-12">
                <div className="flex flex-1 flex-col  justify-center pl-11 pr-36">
                    <p className="text-3xl font-bold">HỆ THỐNG TRA CỨU ĐIỂM DÀNH CHO</p>
                    <p className="text-3xl font-bold">
                        SINH VIÊN ĐẠI HỌC <span className="text-secondary">BÁCH KHOA</span>
                    </p>
                    <p className="mt-10">
                        <span className="text-secondary font-bold text-lg">#</span> Hệ thống được phát triển dựa trên
                        nhu cầu sử dụng của sinh viên toàn trường. Chúng tôi luôn mang lại trải nghiệm tốt nhất cho sinh
                        viên.
                    </p>
                    <button className="bg-secondary mr-auto mt-6 font-medium rounded-xl text-white px-4 shadow-inner hover:shadow-primary py-2">
                        Bắt đầu ngay
                    </button>
                </div>
                <div className="flex flex-1  justify-center mt-10 ">
                    <img src={landingImg} alt="" className=" w-4/5 object-contain " />
                </div>
            </main>
        </div>
    );
}

export default LandingPage;
