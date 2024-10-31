import CourseIcon from '../../assets/img/course.png';
import SearchBar from './Searchbar.jsx';
import { Link } from 'react-router-dom';

function FacultyList() {
    const handleSearch = (query) => {
        console.log('Tìm kiếm với từ khóa:', query);
        // Thực hiện logic tìm kiếm tại đây
    };

    return (
        <div>
            <div className="flex">
                <div className="flex">
                    <img src={CourseIcon} alt="course" className="ml-24 h-24 w-24 p-2" />
                    <h1 className="text-3xl font-semibold">
                        <nav className="mt-2">
                            {' '}
                            {/* Breadcums */}
                            <ul className="flex items-center gap-6 p-2 text-xl text-[#2E4053]">
                                <li className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400">
                                    Bảng điều khiển
                                </li>
                                <div className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400">
                                    /
                                </div>
                                <li className="font-roboto text-center text-sm leading-5 text-black">Khóa học</li>
                            </ul>
                        </nav>
                        <div className="font-roboto ml-2 mt-1 text-3xl font-bold leading-none text-black">Khóa học</div>
                    </h1>
                </div>
                <div className="ml-auto mr-8 mt-12">
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
            <div className="mt-2 flex justify-center">
                <div className="flex w-full flex-col items-center overflow-y-auto rounded-lg border border-gray-300 bg-gray-50 p-4">
                    {Array.from({ length: 12 }, (_, i) => (
                        <div key={i}>
                            <Link
                                to="/management/subject-list"
                                className="my-1 mb-8 flex h-[114px] w-[1179px] flex-shrink-0 items-center rounded-lg border border-[#D5D5D5] bg-[#DBE2EF] p-2 text-gray-800"
                            >
                                <img
                                    src={require(`../../assets/img/bgCourses/bgCourses${i + 1}.jpg`)}
                                    alt={`Item ${i + 1}`}
                                    className="h-full w-[160px] rounded-lg object-cover"
                                />
                                <div className="font-roboto ml-4 flex-shrink-0 text-[24px] font-semibold leading-[27px] text-[#2E2E2E]">
                                    Khoa khoa học - Kỹ thuật máy tính
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FacultyList;
