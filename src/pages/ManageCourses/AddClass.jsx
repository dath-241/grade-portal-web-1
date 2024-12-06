import React, { useEffect, useState } from 'react';
import tick from '../../assets/img/tick.png';
import axios from 'axios';
import {
    CREATE_CLASS_API_URL,
    COURSE_ADMIN_LIST_API_URL,
    LECTURER_LIST_API_URL,
    STUDENT_LIST_API_URL,
    CLASS_LIST_BY_COURSE,
} from '../../constants/api';
import { useParams } from 'react-router-dom';
import close from '../../assets/img/close.png';
const AddClass = () => {
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [courseTeacher, setCourseTeacher] = useState(null);
    const [courseStudents, setCourseStudents] = useState([]);
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFail, setShowFail] = useState(false);
    const [teachersList, setTeachersList] = useState([]);
    const [studentsList, setStudentsList] = useState([]);
    const [classList, setClassList] = useState([]);
    const [className, setClassName] = useState('');
    const [courseList, setCourseList] = useState([]);
    const [smt, setSmt] = useState('');
    const ADMIN_API_URL = process.env.REACT_APP_ADMIN_API_URL;

    const id = useParams();

    useEffect(() => {
        console.log('ID:', id);

        const token = localStorage.getItem('token');

        axios
            .get(LECTURER_LIST_API_URL, {
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
            .get(STUDENT_LIST_API_URL, {
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
            .get(CLASS_LIST_BY_COURSE(id.id), {
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
            .get(COURSE_ADMIN_LIST_API_URL, {
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
    }, [ADMIN_API_URL, id]);

    const handleClassName = (selectedSemester) => {
        if (!selectedSemester) {
            setError('Vui lòng chọn học kỳ.');
            return;
        }
        let classIndex = 1;
        if (!classList.classes) {
            setClassName(`L0${classIndex}`);
            return;
        }
        for (let i = 0; i < classList.classes.length; i++) {
            if (classList.classes[i].Semester === selectedSemester) {
                classIndex++;
            }
        }
        setClassName(`L0${classIndex}`);
        console.log('Class name:', className);
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

        const classData = {
            semester: smt,
            name: className,
            course_id: id.id,
            listStudent_ms: courseStudents.map((student) => student.Ms),
            teacher_id: courseTeacher.ID,
        };

        console.log('classData:', classData);

        const token = localStorage.getItem('token');
        axios
            .post(CREATE_CLASS_API_URL, classData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log('Class created:', response.data);
                if (response.data.code === 'error') {
                    setShowFail(true); // Hiển thị thông báo thất bại
                    setShowSuccess(false); // Ẩn thông báo thành công
                } else {
                    setShowSuccess(true); // Hiển thị thông báo thành công
                    setShowFail(false); // Ẩn thông báo thất bại
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setShowFail(true); // Hiển thị thông báo thất bại
            });
        setTimeout(() => setShowSuccess(false), 2000); // Ẩn thông báo sau 3s
        setTimeout(() => setShowFail(false), 2000); // Ẩn thông báo sau 3s

        console.log('Course added:', { smt, className, courseTeacher, courseStudents });
        // Reset form
        setCourseTeacher(null);
        setCourseStudents([]);
        setFilteredMembers([]);
        window.location.reload();
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
                        onClick={() => {
                            handleFilter('teacher');
                            console.log('teacher');
                        }}
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
                    <div className="flex-1">
                        <h2 className="mb-4 text-xl font-semibold">Danh Sách Thành Viên</h2>
                        <div className="max-h-64 overflow-y-auto md:max-h-96">
                            <table className="min-w-full table-auto rounded-md">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border-b px-4 py-2">Mã số</th>
                                        <th className="border-b px-4 py-2">Tên</th>
                                        <th className="border-b px-4 py-2">Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredMembers &&
                                        filteredMembers.map((member, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
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
                    </div>

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
                        {error && !courseTeacher && <span className="text-red-500">{error}</span>}

                        <h2 className="mb-4 text-xl font-semibold">Sinh Viên Trong Lớp</h2>
                        <div className="max-h-36 overflow-y-auto md:max-h-56">
                            <table className="min-w-full table-auto rounded-md">
                                <tbody>
                                    {courseStudents.map((member, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
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
                        {error && courseStudents.length === 0 && <span className="text-red-500">{error}</span>}
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
            {showFail && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-20 text-center">
                    <div className="mx-6 w-full max-w-md rounded-lg bg-[#ffffff] px-4 py-8 text-2xl font-medium text-black shadow-lg">
                        <img src={close} alt="fail" className="mx-auto mb-2 h-10 w-10" />
                        Thêm lớp thất bại!
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddClass;
