import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/img/logoBK.png';
import LogoutWithGoogle from '../Login/LogoutWithGoogle';
import { useContext } from 'react';
import { UserContext } from '../Login/UserContext';

const avatarURL =
    'https://c4.wallpaperflare.com/wallpaper/821/698/393/anime-naruto-akatsuki-naruto-deidara-naruto-wallpaper-preview.jpg';

function Header() {
    const [avatarPopup, setAvatarPopup] = useState(false);
    const { userRole } = useContext(UserContext);

    const location = useLocation();

    useEffect(() => {
        const items = document.querySelectorAll('.headerNav a');
        const resetClasses = () => items.forEach((item) => item.classList.remove('bg-primary'));

        const path = location.pathname;
        resetClasses();

        items.forEach((item) => {
            const itemPath = new URL(item.href).pathname;

            if (path.startsWith(itemPath)) {
                item.classList.add('bg-primary');
            }
        });
    }, [location.pathname]);

    function adminHeader() {
        return (
            <ul className="headerNav mr-6 flex gap-4 font-medium">
                <p>Admin header</p>
                <Link to="/home" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                    Trang chủ
                </Link>

                <Link to="/management" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                    Bảng điều khiển
                </Link>

                <Link to="/hall-of-fame" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                    Vinh danh
                </Link>
            </ul>
        );
    }

    function studentHeader() {
        return (
            <ul className="headerNav mr-6 flex gap-4 font-medium">
                <p>Student header</p>
                <Link to="/home" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                    Trang chủ
                </Link>

                <Link to="/student-courses" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                    Khóa học của tôi
                </Link>

                <Link to="/hall-of-fame" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                    Vinh danh
                </Link>
            </ul>
        );
    }

    function teacherHeader() {
        return (
            <ul className="headerNav mr-6 flex gap-4 font-medium">
                <p>Teacher header</p>
                <Link to="/home" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                    Trang chủ
                </Link>

                <Link to="/lecturer-courses" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                    Khóa học của tôi
                </Link>

                <Link to="/hall-of-fame" className="rounded-lg px-4 py-2 text-white hover:bg-primary">
                    Vinh danh
                </Link>
            </ul>
        );
    }

    return (
        <div className="header rouned-2xl fixed left-0 right-0 top-0 z-50 bg-bgColor pt-4">
            <div className="z-50 mx-6 flex h-[60px] items-center rounded-2xl bg-opacity-10 bg-gradient-to-r from-[#DBE2EF] to-[#64768C] px-6 py-4">
                <div className="mr-auto flex items-center">
                    <img src={logo} alt="Logo" className="size-[45px]" />
                    <p className="ml-4 text-xl font-semibold">BK Tra cứu</p>
                </div>
                {userRole === 'admin' && adminHeader()}
                {userRole === 'teacher' && teacherHeader()}
                {userRole === 'student' && studentHeader()}
                <div className="flex items-center">
                    <img
                        src={avatarURL}
                        alt="avatar"
                        className="size-[45px] cursor-pointer rounded-full object-cover"
                        onClick={() => setAvatarPopup(!avatarPopup)}
                    />
                </div>

                {avatarPopup && (
                    <div className="absolute right-10 top-20 mt-2 rounded-md border bg-white px-[10px] shadow">
                        <LogoutWithGoogle />
                    </div>
                )}
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
        <div className="flex min-h-screen flex-col bg-bgColor pt-[5rem]">
            <Header />
            <main className="mx-6 flex-grow py-6">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
