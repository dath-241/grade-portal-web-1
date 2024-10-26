import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../../assets/img/logoBK.png';

function Header() {
    useEffect(() => {
        const items = document.querySelectorAll('.headerNav a');
        const resetClasses = () => items.forEach((item) => item.classList.remove('bg-primary'));

        const path = window.location.pathname;
        resetClasses();

        if (path.startsWith('/home')) {
            items[0].classList.add('bg-primary');
        } else if (path.startsWith('/management')) {
            items[1].classList.add('bg-primary');
        } else if (path.startsWith('/courses')) {
            items[2].classList.add('bg-primary');
        } else if (path.startsWith('/hall-of-fame')) {
            items[2].classList.add('bg-primary');
        }
    });

    return (
        <div className="mx-6 flex h-[60px] items-center rounded-2xl bg-opacity-10 bg-gradient-to-r from-[#DBE2EF] to-[#64768C] px-6 py-4">
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

                <Link to="/courses" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
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
    return (
        <div className="flex h-20 min-h-screen flex-col bg-bgColor pt-6">
            <Header />
            <main className="mx-6 h-full pt-6">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
