import SearchBar from './Searchbar.jsx';
import { Link, useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchClassByIDApi} from '../../apis/Course_Class.jsx';
import { fetchLectureByIDApi } from '../../apis/lecturers.jsx';
function ClassList() {
    const [Class, setClass] = useState([]);
    const [originalClass, setOriginalClass] = useState([]);
    const {id} = useParams();
    useEffect(() => {        
        const handleGetCourses = async () => {
            try {
                const fetchedClassData = await fetchClassByIDApi(id);
                const Data = await Promise.all(
                    fetchedClassData.map(async (classItem) => {
                        const teacherData = await fetchLectureByIDApi(classItem.TeacherId); 
                        return {
                            semester: classItem.Semester,
                            name: classItem.Name,
                            course_id: classItem.course_id,
                            studentCount: classItem.ListStudentMs?.length || 0,
                            teacher_id: classItem.TeacherId,
                            teacher_name: teacherData.Name || 'N/A', 
                            teacher_email: teacherData.Email || 'N/A',
                        };
                    })
                );
                setOriginalClass(Data);
                setClass(Data); 
            } catch (error) {
                console.error('Error fetching courses or lecturers:', error);
            }
        };

        handleGetCourses();
    }, [id]);
    const handleSearch = (query) => {
        console.log('Tìm kiếm với từ khóa:', query);
        if (query) {
            const filteredCourses = originalClass.filter(Class => 
                Class.name.toLowerCase().includes(query.toLowerCase()) || 
                Class.teacher_name.toLowerCase().includes(query.toLowerCase()) || 
                Class.teacher_email.toLowerCase().includes(query.toLowerCase()) || 
                Class.studentCount.toString().includes(query.toLowerCase())
            );
            setClass(filteredCourses);
        } else {
            setClass(originalClass);
        }
    };
    
    return (
        <div>
            <div className="flex items-center">
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
                            <Link
                                to={'/management/subject-list'}
                                className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400"
                            >
                                Khoa KHKT máy tính
                            </Link>
                            <div className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400">
                                /
                            </div>
                        </ul>
                    </nav>
                    <div className="font-roboto ml-2 mt-1 text-3xl font-semibold leading-none text-black">Khóa học</div>
                </h1>

                <Link to={`/management/add-class/${id}`} className="ml-auto font-semibold">
                    <div className="size-fit cursor-pointer rounded-lg bg-primary px-4 py-2 text-white shadow-inner hover:shadow-white">
                        Tạo lớp học
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
                    Công nghệ phần mềm
                </h2>
                <div className="w-full flex-col items-center overflow-y-auto bg-gray-50 p-4">
                    <table className="min-w-full border-collapse bg-white">
                        <thead>
                            <tr className="text-left">
                                <th className="border-b border-gray-300 px-4 py-2">Lớp học</th>
                                <th className="border-b border-gray-300 px-4 py-2">Giảng viên</th>
                                <th className="border-b border-gray-300 px-4 py-2">Email</th>
                                <th className="border-b border-gray-300 px-4 py-2">Số lượng sinh viên</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Class.map((CLASS, index) => (
                                <tr
                                    key={index}
                                    className="cursor-pointer hover:bg-gray-100"
                                >
                                    <td className="px-4 py-2">{CLASS.name}</td>
                                    <td className="px-4 py-2">{CLASS.teacher_name}</td>
                                    <td className="px-4 py-2">{CLASS.teacher_email}</td>
                                    <td className="px-4 py-2">{CLASS.studentCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ClassList;
