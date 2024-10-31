import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../../assets/img/logoBK.png';
import backGround from '../../assets/img/BgHome.jpg';

function Header() {
    const location = useLocation();
    const isHome = location.pathname === '/home';

    useEffect(() => {
        const items = document.querySelectorAll('.headerNav a');
        const resetClasses = () => items.forEach((item) => item.classList.remove('bg-primary'));

        const path = window.location.pathname;
        resetClasses();

        const pathToIndexMap = {
            '/home': 0,
            '/management': 1,
            '/student-course': 2,
            '/lecturer-course': 2,
            '/hall-of-fame': 3,
        };

        const matchingPrefix = Object.keys(pathToIndexMap).find((prefix) => path.startsWith(prefix));

        if (matchingPrefix) {
            window.scrollTo(0, 0);
            items[pathToIndexMap[matchingPrefix]].classList.add('bg-primary');
        }
    });

    return (
        <div
            className={`header fixed left-0 right-0 top-0 z-50 mx-6 rounded-b-2xl ${isHome ? 'bg-transparent' : 'bg-white'} pt-4`}
        >
            <div className="z-50 flex h-[60px] items-center rounded-2xl bg-opacity-10 bg-gradient-to-r from-[#DBE2EF] to-[#64768C] px-6 py-4 shadow">
                <div className="mr-auto flex items-center">
                    <img src={logo} alt="Logo" className="size-[45px]" />
                    <p className="ml-4 text-xl font-semibold">BK Tra cứu</p>
                </div>
                <ul className="headerNav mr-6 flex gap-4 font-medium">
                    <Link to="/home" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                        Trang chủ
                    </Link>

                    <Link to="/management" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                        Bảng điều khiển
                    </Link>

                    <Link to="/student-courses" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                        Khóa học của tôi
                    </Link>

                    <Link to="/hall-of-fame" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                        Vinh danh
                    </Link>
                </ul>
                <div className="flex items-center">
                    <img
                        src="https://c4.wallpaperflare.com/wallpaper/821/698/393/anime-naruto-akatsuki-naruto-deidara-naruto-wallpaper-preview.jpg"
                        alt="avatar"
                        className="size-[45px] rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div className="-mb-20 flex h-20 items-center justify-center bg-primary py-2 text-white">
            <p className="text-center">© 2021 BK Tra cứu. All rights reserved.</p>
        </div>
    );
}

function Layout({ children }) {
    const location = useLocation();
    const isHome = location.pathname === '/home';

    return (
        <div className="relative flex min-h-screen flex-col pt-[5rem]">
            {isHome && (
                <div
                    className="absolute inset-0 z-0 bg-black opacity-80"
                    style={{
                        backgroundImage: `url(${backGround})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(2px)'
                    }}
                />
            )}
            <div className="relative z-10 flex min-h-screen flex-col">
                <Header />
                <main className="mx-6 flex-grow py-6">{children}</main>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
