import { useEffect, useRef, useState } from 'react';
import CourseItem from './components/course.component';
import { Link } from 'react-router-dom';
import { fetchAllClassApi } from '../../apis/classInfo.api';

function CoursePage() {
    const [courses, setCourses] = useState([]);
    const courseList = useRef([]);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetchAllClassApi()
        .then(classList =>{
            courseList.current = classList
            setLoading(false)
            setCourses(classList)
            
        })
        .catch(()=>{
            setLoading(false)
            console.log("Error when fetching data")
        })
    }, []);

    const course_list = courseList.current;
    const semeters = ['Tất cả học kì', ...new Set(course_list.map((course) => course.Semester))];
    const changeHandler = (event) => {
        if (event.target.value === '') {
            setCourses(course_list);
        } else {
            const courseFind = course_list.filter((course) =>
                course.courseName.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()),
            );
            setCourses(courseFind);
        }
    };
    const changeSemesterHandler = (event) => {
        if (event.target.value === '') {
            setCourses(course_list);
        } else {
            const courseFind = course_list.filter((course) => course.Semester.trim() === event.target.value.trim());
            setCourses(courseFind);
        }
    };
    
    if(loading){
        return(
            <div className="flex justify-center items-center min-h-screen text-lg font-semibold">
                Đang tải dữ liệu ...
            </div>
        )
    }
    return (
        <div className="mx-auto max-w-[70%]">
            <div className="my-6 text-3xl font-semibold">Các khoá học của tôi</div>
            <div className="mb-6 flex justify-between">
                <div className="flex items-center rounded-xl border-[1px] bg-white px-4">
                    <input
                        type="text"
                        id="course"
                        placeholder="Tìm kiếm khoá học"
                        className="text-lg outline-none"
                        onChange={changeHandler}
                    />
                    <i className="fa-solid fa-magnifying-glass text-xl opacity-80"></i>
                </div>
                <div className="rounded-xl border-[1px] bg-white pr-4 text-lg">
                    <select
                        name="semester"
                        id=""
                       className="cursor-pointer rounded-xl px-4 py-2 outline-none"
                        onChange={changeSemesterHandler}
                    >
                        {semeters.map((semeter, index) => {
                            return (
                                <option key={index} value={semeter === 'Tất cả học kì' ? '' : semeter}>
                                    {semeter}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            {courses.length === 0 ? (
                <div className="mt-[10px] flex h-screen items-center justify-center rounded-[20px] border-[1px] bg-white text-[35px]">
                    Không tìm thấy khoá học
                </div>
            ) : (
                courses.map((course, index) => {                    
                    return (
                        <Link to={`/lecturer-course/${course.ID}/info`} key={index}>
                            <CourseItem
                                id={index}
                                courseName={course.courseName}
                                teacher={course.teacherName}
                                semester={course.Semester}
                                group={course.Name}
                            />
                        </Link>
                    );
                })
            )}
        </div>
    );
}
export default CoursePage;
