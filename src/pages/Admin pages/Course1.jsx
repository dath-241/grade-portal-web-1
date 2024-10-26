import courseicon from '../../assets/img/course.png';
import SearchBar from './Searchbar.jsx';
import { Link } from 'react-router-dom';
function Course1() {
    const handleSearch = (query) => {
        console.log('Tìm kiếm với từ khóa:', query);
        // Thực hiện logic tìm kiếm tại đây
    };

    return (
        <div>
            <div className="flex">
                <div className="flex">
                    <img src={require('../../assets/img/course.png')} alt="course" className="w-24 h-24 p-2 ml-24" />
                    <h1 className="text-3xl font-semibold">
                        <nav className="mt-2">
                            {' '}
                            {/* Breadcums */}
                            <ul className=" flex p-2 gap-6 text-xl text-[#2E4053] items-center">
                                <li className=" text-gray-400 text-center font-roboto text-sm font-semibold leading-5">
                                    Bảng điều khiển
                                </li>
                                <div className=" text-gray-400 text-center font-roboto text-sm font-semibold leading-5">
                                    /
                                </div>
                                <li className=" text-black text-center font-roboto text-sm  leading-5">Khóa học</li>
                            </ul>
                        </nav>
                        <div className="ml-2 mt-1 text-black font-roboto text-3xl font-bold leading-none ">
                            Khóa học
                        </div>
                    </h1>
                </div>
                <div className="ml-auto mt-12 mr-8">
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <div className="flex flex-col items-center w-full h-[580px] overflow-y-auto p-4 border border-gray-300 rounded-lg bg-gray-50 ">
                    {Array.from({ length: 10 }, (_, i) => (
                        <div key={i}>
                            <Link
                                to="/Course1/Course2"
                                className="w-[1179px] h-[114px] mb-8 flex-shrink-0 bg-[#DBE2EF] border border-[#D5D5D5] rounded-[12px] flex items-center text-gray-800 my-1"
                            >
                                <img
                                    src={require('../../assets/img/computer-chip-ai-main 1.png')}
                                    alt={`Item ${i + 1}`}
                                    className="w-[160px] h-[80px] ml-4"
                                />
                                <div className="ml-4 flex-shrink-0 text-[#2E2E2E] font-roboto text-[24px] font-semibold leading-[27px]">
                                    Khoa khoa học - Kỹ thuật máy tính
                                </div>
                                <div className="mt-0.5 ml-auto pr-4">
                                    <button className="cursor-pointer">
                                        <img
                                            src={require('../../assets/img/Delete Todo.png')}
                                            alt="course"
                                            className="p-2"
                                        />
                                    </button>
                                </div>
                                <div className="mr-4">
                                    <button className="cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="26"
                                            height="21"
                                            viewBox="0 0 26 21"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M13.5906 1.38225L17.1079 7.06698L23.8777 7.6141C24.2067 7.63641 24.4899 7.81284 24.6028 8.06599C24.7157 8.31914 24.6378 8.60275 24.4033 8.79238L18.8319 13.2971L20.8975 19.4183C20.9838 19.6835 20.8714 19.9654 20.6104 20.1384C20.3493 20.3114 19.9881 20.3434 19.6876 20.2201L12.8243 17.4477L5.97045 20.2167C5.66994 20.34 5.30874 20.308 5.04767 20.135C4.78659 19.962 4.67419 19.6801 4.76052 19.4149L6.82613 13.2937L1.25056 8.78895C1.01602 8.59932 0.938118 8.31571 1.05104 8.06256C1.16396 7.80941 1.44708 7.63298 1.77616 7.61067L8.54589 7.06355L12.058 1.38225C12.2052 1.14761 12.5011 1 12.8243 1C13.1474 1 13.4433 1.14761 13.5906 1.38225Z"
                                                stroke="#B3B3B3"
                                                stroke-width="1.2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Course1;
