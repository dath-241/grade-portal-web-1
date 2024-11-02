import React, { useState } from 'react';
import tick from '../../assets/img/tick.png';

const AddCourse = () => {
    const [department, setDepartment] = useState('');
    const [subject, setSubject] = useState('');
    const [courseName, setCourseName] = useState('');
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [courseTeacher, setCourseTeacher] = useState(null);
    const [courseStudents, setCourseStudents] = useState([]);
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const departments = ['KHMT', 'KTMT', 'Hóa'];
    const subjects = ['DATH', 'Công nghệ phần mềm', 'Mạng máy tính'];
    const studentsList = [
        { id: 1, name: 'Member 1', department: 'KHMT', subject: 'DATH' },
        { id: 2, name: 'Member 2', department: 'KHMT', subject: 'DATH' },
    ];
    const teachersList = [
        { id: 3, name: 'Member 3', department: 'KHMT', subject: 'DATH' },
        { id: 4, name: 'Member 4', department: 'KHMT', subject: 'DATH' },
    ];

    const handleFilter = (type) => {
        if (!department || !subject) {
            setError('Vui lòng chọn đầy đủ thông tin.');
            return;
        }
        setError('');
        const allMembers = type === 'teacher' ? teachersList : studentsList;
        const filtered = allMembers.filter(
            (member) =>
                member.department === department &&
                member.subject === subject &&
                (type === 'student' ? !courseStudents.includes(member) : courseTeacher?.id !== member.id),
        );
        setFilteredMembers(filtered);
    };

    const addMemberToCourse = (member, type) => {
        console.log('showSuccess', showSuccess);
        if (type === 'teacher') {
            setCourseTeacher(member);
        } else {
            if (courseStudents.includes(member)) return;
            setCourseStudents([...courseStudents, member]);
        }
    };

    const removeStudentFromCourse = (student) => {
        setCourseStudents(courseStudents.filter((s) => s.id !== student.id));
    };
    const removeTeacherFromCourse = () => {
        setCourseTeacher(null);
    };

    const handleSubmit = (e) => {
        console.log('showSuccess', showSuccess);
        e.preventDefault();
        if (!department || !subject || !courseName || !courseTeacher || courseStudents.length === 0) {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }
        setError('');
        setShowSuccess(true); // Hiển thị thông báo thành công

        setTimeout(() => setShowSuccess(false), 3000); // Ẩn thông báo sau 3s

        // Handle form submission logic here
        console.log('Course added:', { department, subject, courseName, courseTeacher, courseStudents });
        // Reset form
        setDepartment('');
        setSubject('');
        setCourseName('');
        setCourseTeacher(null);
        setCourseStudents([]);
        setFilteredMembers([]);
    };

    return (
        <div className="rounded-lg bg-white p-8 shadow-lg">
            <h1 className="mb-6 text-2xl font-semibold">Thêm Lớp Học</h1>

            <form onSubmit={handleSubmit} className=" ">
                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium">Khoa:</label>
                        <select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="rounded-md border border-gray-300 bg-white p-2 focus:border-blue-500"
                        >
                            <option value="">Chọn Khoa</option>
                            {departments.map((dep, index) => (
                                <option key={index} value={dep}>
                                    {dep}
                                </option>
                            ))}
                        </select>
                        {error && !department && <span className="text-red-500">{error}</span>}
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-medium">Môn Học:</label>
                        <select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="rounded-md border border-gray-300 bg-white p-2 focus:border-blue-500"
                        >
                            <option value="">Chọn Môn Học</option>
                            {subjects.map((sub, index) => (
                                <option key={index} value={sub}>
                                    {sub}
                                </option>
                            ))}
                        </select>
                        {error && !subject && <span className="text-red-500">{error}</span>}
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-medium">Tên Lớp Học:</label>
                        <input
                            type="text"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            className="rounded-md border border-gray-300 bg-white p-2 focus:border-blue-500"
                            placeholder="Nhập tên lớp học"
                        />
                        {error && !courseName && <span className="text-red-500">{error}</span>}
                    </div>
                </div>
                <div className="mb-6 flex gap-4">
                    <button
                        type="button"
                        onClick={() => handleFilter('teacher')}
                        className="rounded-xl bg-primary px-4 py-2 font-medium text-white shadow-inner hover:shadow-white"
                    >
                        Giảng Viên
                    </button>
                    <button
                        type="button"
                        onClick={() => handleFilter('student')}
                        className="rounded-xl bg-[#DBE2EF] px-4 py-1 font-semibold shadow-inner hover:shadow-primary"
                    >
                        Sinh Viên
                    </button>
                </div>

                <div className="flex flex-col gap-6 text-center md:flex-row">
                    {/* Bảng danh sách thành viên */}
                    <div className="flex-1">
                        <h2 className="mb-4 text-xl font-semibold">Danh Sách Thành Viên</h2>
                        <table className="min-w-full rounded-md">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border-b px-4 py-2">Mã số</th>
                                    <th className="border-b px-4 py-2">Tên</th>
                                    <th className="border-b px-4 py-2">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredMembers.map((member) => (
                                    <tr key={member.id} className="hover:bg-gray-50">
                                        <td className="border-b px-4 py-2">{member.id}</td>
                                        <td className="border-b px-4 py-2">{member.name}</td>
                                        <td className="border-b px-4 py-2">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    addMemberToCourse(member, member.id > 2 ? 'teacher' : 'student')
                                                }
                                                className="rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600"
                                            >
                                                Thêm
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Bảng giảng viên và sinh viên trong lớp */}
                    <div className="flex flex-1 flex-col gap-4">
                        <h2 className="mb-4 text-xl font-semibold">Giảng Viên Trong Lớp</h2>
                        <table className="min-w-full rounded-md bg-white">
                            <tbody>
                                {courseTeacher && (
                                    <tr className="hover:bg-gray-50">
                                        <td className="border-b px-4 py-2">{courseTeacher.id}</td>
                                        <td className="border-b px-4 py-2">{courseTeacher.name}</td>
                                        <td className="border-b px-4 py-2">
                                            <button
                                                type="button"
                                                onClick={removeTeacherFromCourse}
                                                className="rounded-md bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        <h2 className="mb-4 text-xl font-semibold">Sinh Viên Trong Lớp</h2>
                        <table className="min-w-full rounded-md">
                            <tbody>
                                {courseStudents.map((member) => (
                                    <tr key={member.id} className="hover:bg-gray-50">
                                        <td className="border-b px-4 py-2">{member.id}</td>
                                        <td className="border-b px-4 py-2">{member.name}</td>
                                        <td className="border-b px-4 py-2">
                                            <button
                                                onClick={() => removeStudentFromCourse(member)}
                                                className="rounded-md bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-24 flex justify-center justify-items-center">
                    <button
                        type="submit"
                        className="rounded-xl bg-primary px-4 py-2 font-medium text-white shadow-inner hover:shadow-white"
                    >
                        Thêm Lớp Học
                    </button>
                </div>
            </form>
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-20 text-center">
                    <div className="mx-6 w-full max-w-md rounded-lg bg-[#ffffff] px-4 py-8 text-2xl font-medium text-black shadow-lg">
                        <img src={tick} alt="success" className="mx-auto mb-2 h-10 w-10" />
                        Thêm lớp thành công!
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddCourse;
