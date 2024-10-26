import { Link } from 'react-router-dom';

function Controller() {
    return (
        <div className="flex h-full pb-2 pt-2">
            <div className="grid flex-1 grid-cols-1 gap-8 rounded-lg bg-white p-8 md:grid-cols-3">
                <Link
                    to="/"
                    className="max-h-[250px] cursor-pointer rounded-lg bg-gray-200 p-6 shadow-md hover:bg-gray-300"
                >
                    <div className="flex pb-6">
                        <img src={require('../../assets/img/teacher.png')} alt="teacher" className="w-24" />
                        <h2 className="flex pl-10 pt-4 text-3xl font-semibold">Giảng viên</h2>
                    </div>
                    <p>Xem và quản lý thông tin các giáo viên</p>
                </Link>
                <Link
                    to="/"
                    className="max-h-[250px] cursor-pointer rounded-lg bg-gray-200 p-6 shadow-md hover:bg-gray-300"
                >
                    <div className="flex pb-6">
                        <img src={require('../../assets/img/student.png')} alt="student" className="w-24" />
                        <h2 className="pl-10 pt-4 text-3xl font-semibold">Sinh viên</h2>
                    </div>
                    <p>Xem và quản lý thông tin các học sinh</p>
                </Link>
                <Link
                    to="/"
                    className="max-h-[250px] cursor-pointer rounded-lg bg-gray-200 p-6 shadow-md hover:bg-gray-300"
                >
                    <div className="flex pb-6">
                        <img src={require('../../assets/img/course.png')} alt="course" className="w-24" />
                        <h2 className="pl-10 pt-4 text-3xl font-semibold">Khóa học</h2>
                    </div>
                    <p>Xem và quản lý thông tin các khóa học</p>
                </Link>
            </div>
        </div>
    );
}

export default Controller;
