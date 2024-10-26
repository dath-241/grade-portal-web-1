import courseicon from '../../assets/img/course.png';
import SearchBar from './Searchbar.jsx';
import { Link } from 'react-router-dom';
function Course3() {
    const handleSearch = (query) => {
        console.log('Tìm kiếm với từ khóa:', query);
    };
    const monHocData = [
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
        { malop: 'L04', giangvien: 'Nguyễn Văn A', email: 'nguyenvana@hcmut.edu.vn', soluongsv: 99 },
    ];
    return (
        <div>
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
                            <li className=" text-gray-400 text-center font-roboto text-sm font-semibold leading-5">
                                Khóa học
                            </li>
                            <div className=" text-gray-400 text-center font-roboto text-sm font-semibold leading-5">
                                /
                            </div>
                            <li className=" text-gray-400 text-center font-roboto text-sm font-semibold leading-5">
                                Khoa KHKT máy tính
                            </li>
                            <div className=" text-gray-400 text-center font-roboto text-sm font-semibold leading-5">
                                /
                            </div>
                            <li className=" text-black text-center font-roboto text-sm  leading-5">
                                Cộng nghệ phần mềm
                            </li>
                        </ul>
                    </nav>
                    <div className="ml-2 mt-1 text-black font-roboto text-3xl font-bold leading-none ">Khóa học</div>
                </h1>
            </div>
            <div className="ml-16 mt-4 mr-8">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="ml-8 mr-8 mt-6 w-auto h-[580px] p-4 border border-gray-300 rounded-[24px] bg-gray-50 ">
                <h2
                    className="mb-4 text-left mt-4 ml-4"
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
                    Cộng nghệ phần mềm
                </h2>
                <div className="flex-col items-center w-full h-[560px] overflow-y-auto p-4 bg-gray-50">
                    <table className="min-w-full border-collapse bg-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b border-gray-300">Lớp học</th>
                                <th className="px-4 py-2 border-b border-gray-300">Giảng viên</th>
                                <th className="px-4 py-2 border-b border-gray-300">Email</th>
                                <th className="px-4 py-2 border-b border-gray-300">Số lượng sinh viên</th>
                            </tr>
                        </thead>
                        <tbody>
                            {monHocData.map((monHoc, index) => (
                                <tr key={index} className="text-center">
                                    <td className="px-4 py-2">
                                        <Link to={`/Course1/Course2/Course3`} className="hover:underline">
                                            {monHoc.malop}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">{monHoc.giangvien}</td>
                                    <td className="px-4 py-2">{monHoc.email}</td>
                                    <td className="px-4 py-2">{monHoc.soluongsv}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Course3;
