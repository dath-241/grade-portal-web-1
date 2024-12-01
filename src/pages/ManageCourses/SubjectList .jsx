import SearchBar from './Searchbar.jsx';
import { Link } from 'react-router-dom';

function SubjectList() {
    const handleSearch = (query) => {
        console.log('Tìm kiếm với từ khóa:', query);
    };
    const monHocData = [
        { maMonHoc: 'COXXXXX', Mon: 'Cộng nghệ phần mềm', soLuongLop: 3 },
        { maMonHoc: 'COXXXXX', Mon: 'Đồ án cộng nghệ phần mềm', soLuongLop: 2 },
        { maMonHoc: 'COXXXXX', Mon: 'Mạng máy tính', soLuongLop: 4 },
        { maMonHoc: 'COXXXXX', Mon: 'Cộng nghệ phần mềm', soLuongLop: 3 },
        { maMonHoc: 'COXXXXX', Mon: 'Đồ án cộng nghệ phần mềm', soLuongLop: 2 },
        { maMonHoc: 'COXXXXX', Mon: 'Mạng máy tính', soLuongLop: 4 },
        { maMonHoc: 'COXXXXX', Mon: 'Cộng nghệ phần mềm', soLuongLop: 3 },
        { maMonHoc: 'COXXXXX', Mon: 'Đồ án cộng nghệ phần mềm', soLuongLop: 2 },
        { maMonHoc: 'COXXXXX', Mon: 'Mạng máy tính', soLuongLop: 4 },
        { maMonHoc: 'COXXXXX', Mon: 'Cộng nghệ phần mềm', soLuongLop: 3 },
        { maMonHoc: 'COXXXXX', Mon: 'Đồ án cộng nghệ phần mềm', soLuongLop: 2 },
        { maMonHoc: 'COXXXXX', Mon: 'Mạng máy tính', soLuongLop: 4 },
        { maMonHoc: 'COXXXXX', Mon: 'Cộng nghệ phần mềm', soLuongLop: 3 },
        { maMonHoc: 'COXXXXX', Mon: 'Đồ án cộng nghệ phần mềm', soLuongLop: 2 },
        { maMonHoc: 'COXXXXX', Mon: 'Mạng máy tính', soLuongLop: 4 },
        { maMonHoc: 'COXXXXX', Mon: 'Cộng nghệ phần mềm', soLuongLop: 3 },
        { maMonHoc: 'COXXXXX', Mon: 'Đồ án cộng nghệ phần mềm', soLuongLop: 2 },
        { maMonHoc: 'COXXXXX', Mon: 'Mạng máy tính', soLuongLop: 4 },
        // Thêm các môn học khác nếu cần
    ];
    return (
        <div>
            <div className="flex">
                <img src={require('../../assets/img/course.png')} alt="course" className="h-24 w-24 p-2" />
                <h1 className="text-3xl font-semibold">
                    <nav className="mt-2">
                        {' '}
                        {/* Breadcums */}
                        <ul className="flex items-center gap-6 p-2 text-xl text-[#2E4053]">
                            <Link
                                to={'/management/faculty-list'}
                                className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400"
                            >
                                Các khoa
                            </Link>
                            <div className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400">
                                /
                            </div>
                            <li className="font-roboto text-center text-sm leading-5 text-black">Khoa KHKT máy tính</li>
                        </ul>
                    </nav>
                    <div className="font-roboto ml-2 mt-1 text-3xl font-semibold leading-none text-black">Khóa học</div>
                </h1>
                <Link to="/managerment/add-course" className="ml-auto font-semibold">
                    <div className="mt-8 size-fit cursor-pointer rounded-lg bg-primary px-4 py-2 text-white shadow-inner hover:shadow-white">
                        Tạo môn học
                    </div>
                </Link>
            </div>
            <div className="ml-16 mr-8 mt-4">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="ml-8 mr-8 mt-6 w-auto rounded-[24px] border border-gray-300 bg-gray-50 p-4">
                <h2
                    className="mb-4 ml-4 mt-4 text-left"
                    style={{
                        color: 'var(--black-100, #1C1C1C)',
                        fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on",
                        fontFamily: 'Roboto',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '20px',
                    }}
                >
                    Danh sách môn học
                </h2>
                <div className="w-full flex-col items-center overflow-y-auto bg-gray-50 p-4">
                    <table className="min-w-full border-collapse bg-white">
                        <thead>
                            <tr>
                                <th className="border-b border-gray-300 px-4 py-2 text-start">Mã môn học</th>
                                <th className="border-b border-gray-300 px-4 py-2 text-start">Tên môn học</th>
                                <th className="border-b border-gray-300 px-4 py-2 text-start">Số lượng lớp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {monHocData.map((monHoc, index) => (
                                <tr key={index} className="">
                                    <td className="px-4 py-2">{monHoc.maMonHoc}</td>
                                    <td className="px-4 py-2">
                                        <Link to={`/management/class-list`} className="hover:underline">
                                            {monHoc.Mon}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">{monHoc.soLuongLop}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SubjectList;
