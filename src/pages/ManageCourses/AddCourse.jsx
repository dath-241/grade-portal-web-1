import React, { useEffect, useState } from 'react';
import tick from '../../assets/img/tick.png';
import axios from 'axios';

const AddCourse = () => {
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [courseTeacher, setCourseTeacher] = useState(null);
    const [courseStudents, setCourseStudents] = useState([]);
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [teachersList, setTeachersList] = useState([]);
    const [studentsList, setStudentsList] = useState([]);
    const [classList, setClassList] = useState([]);
    const [className, setClassName] = useState('');
    const [courseList, setCourseList] = useState([]);
    const [smt, setSmt] = useState('');
    const ADMIN_API_URL = process.env.REACT_APP_ADMIN_API_URL;
    const courseId = '672b86fd226ae67ef9aaa045';
    useEffect(() => {
        const token = localStorage.getItem('token');

        axios
            .get(`${ADMIN_API_URL}/account/teacher`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log('Teacher', response.data);
                setTeachersList(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        axios
            .get(`${ADMIN_API_URL}/account/student`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log('Student', response.data);
                setStudentsList(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        axios
            .get(`${ADMIN_API_URL}/class/course/${courseId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log('Class', response.data);
                setClassList(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        axios
            .get(`${ADMIN_API_URL}/course/all`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log('Course', response.data);
                setCourseList(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleClassName = (selectedSemester) => {
        if (!selectedSemester) {
            setError('Vui lòng chọn học kỳ.');
            return;
        }
        let classIndex = 1;
        for (let i = 0; i < classList.classes.length; i++) {
            if (classList.classes[i].Semester === selectedSemester) {
                classIndex++;
            }
        }
        setClassName(`L0${classIndex}`);
    };
    const handleFilter = (type) => {
        setError('');
        if (type === 'teacher') {
            setFilteredMembers(teachersList.foundedUser);
        } else {
            setFilteredMembers(studentsList.foundedUser);
        }
    };

    const addMemberToCourse = (member, type) => {
        if (type === 'teacher') {
            setCourseTeacher(member);
        } else {
            if (courseStudents.includes(member)) return;
            setCourseStudents([...courseStudents, member]);
        }
    };

    const removeStudentFromCourse = (student) => {
        setCourseStudents(courseStudents.filter((s) => s.Ms !== student.Ms));
    };
    const removeTeacherFromCourse = () => {
        setCourseTeacher(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!smt || !className || !courseTeacher || courseStudents.length === 0) {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }
        setError('');
        setShowSuccess(true); // Hiển thị thông báo thành công

        const classData = {
            semester: smt,
            name: className,
            course_id: courseId,
            listStudent_ms: courseStudents.map((student) => student.Ms),
            teacher_id: courseTeacher.ID,
        };

        console.log('classData:', classData);

        const token = localStorage.getItem('token');
        axios
            .post(`${ADMIN_API_URL}/class/create`, classData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log('Class created:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        setTimeout(() => setShowSuccess(false), 3000); // Ẩn thông báo sau 3s

        // Handle form submission logic here
        console.log('Course added:', { smt, className, courseTeacher, courseStudents });
        // Reset form
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
                        <label className="mb-2 font-medium">Học kỳ:</label>
                        <select
                            value={smt}
                            onChange={(e) => {
                                setSmt(e.target.value);
                                handleClassName(e.target.value);
                            }}
                            className="rounded-md border border-gray-300 bg-white p-2 focus:border-blue-500"
                        >
                            <option value="">Chọn Học Kỳ</option>
                            {courseList.semester &&
                                Object.values(courseList.semester).map((sem) => (
                                    <option key={sem} value={sem}>
                                        {sem}
                                    </option>
                                ))}
                        </select>
                        {error && !smt && <span className="text-red-500">{error}</span>}
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
                                {filteredMembers &&
                                    filteredMembers.map((member) => (
                                        <tr key={member.Ms} className="hover:bg-gray-50">
                                            <td className="border-b px-4 py-2">{member.Ms}</td>
                                            <td className="border-b px-4 py-2">{member.Name}</td>
                                            <td className="border-b px-4 py-2">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        addMemberToCourse(
                                                            member,
                                                            member.Role === 'teacher' ? 'teacher' : 'student',
                                                        )
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
                                        <td className="border-b px-4 py-2">{courseTeacher.Ms}</td>
                                        <td className="border-b px-4 py-2">{courseTeacher.Name}</td>
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
                                    <tr key={member.Ms} className="hover:bg-gray-50">
                                        <td className="border-b px-4 py-2">{member.Ms}</td>
                                        <td className="border-b px-4 py-2">{member.Name}</td>
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
