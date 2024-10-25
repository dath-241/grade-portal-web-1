import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../../assets/img/hcmut.png';
import 'flowbite';

function Header() {
    useEffect(() => {
        const items = document.querySelectorAll('.headerNav li');
        items.forEach((item) => {
            item.addEventListener('click', () => {
                items.forEach((i) => i.classList.remove('bg-primary'));
                item.classList.add('bg-primary');
            });
        });
    }, []);

    return (
        <div className="mx-6 flex h-[60px] items-center rounded-2xl bg-opacity-10 bg-gradient-to-r from-[#DBE2EF] to-[#64768C] px-6">
            <div className="mr-auto flex items-center">
                <img src={logo} alt="Logo" className="size-[45px]" />
                <p className="ml-4 text-xl font-semibold">BK Tra cứu</p>
            </div>
            <ul className="headerNav mr-6 flex gap-4 font-medium text-textColor">
                <li className="rounded-lg bg-primary px-4 py-1 text-white hover:bg-primary">
                    <Link to="">Trang chủ</Link>
                </li>
                <li className="rounded-lg px-4 py-1 text-white hover:bg-primary">
                    {/* <Link to="">Bảng điều khiển</Link> */}
                    <button
                        id="dropdownNavbarLink"
                        data-dropdown-toggle="dropdownNavbar"
                        class="flex w-full items-center justify-between rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:dark:hover:bg-transparent"
                    >
                        Bảng điều khiển
                        <svg
                            class="ms-2.5 h-2.5 w-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div
                        id="dropdownNavbar"
                        class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow"
                    >
                        <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                            <li>
                                <Link to="/controlteachers" class="block px-4 py-2 hover:bg-gray-100">
                                    Giảng viên
                                </Link>
                            </li>
                            <li>
                                <Link to="/controlstudents" class="block px-4 py-2 hover:bg-gray-100">
                                    Sinh viên
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="rounded-lg px-4 py-1 text-white hover:bg-primary">
                    <Link to="">Khóa học của tôi</Link>
                </li>
                <li className="rounded-lg px-4 py-1 text-white hover:bg-primary">
                    <Link to="">Vinh danh</Link>
                </li>
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
        <div className="-mb-20 flex h-20 items-center justify-center bg-primary text-white">
            <p className="text-center">© 2021 BK Tra cứu. All rights reserved.</p>
        </div>
    );
}

function Layout({ children }) {
    return (
        <div className="flex h-20 min-h-screen flex-col bg-bgColor pt-6">
            <Header />
            <main className="flex-grow px-12">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
