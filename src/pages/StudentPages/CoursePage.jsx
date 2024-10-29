import { useState } from 'react';
import CourseItem from './components/course.component';
import { Link } from 'react-router-dom';
const courseList = [
    {
        id: 'CO2039',
        img: 'https://via.assets.so/movie.png?id=1&q=95&w=190&h=120&fit=fill',
        name: 'Lập trình nâng cao',
        teacher: 'Lê Đình Thuận',
        semester: 'HK221',
        group: 'L08',
        status: 'Đang diễn ra',
    },
];

function CoursePage() {
    const [courses, setCourses] = useState(courseList);
    const semeters = ['Tất cả học kì', ...new Set(courseList.map((course) => course.semester))];
    const changeHandler = (event) => {
        if (event.target.value === '') {
            setCourses(courseList);
        } else {
            const courseFind = courseList.filter((course) =>
                course.name.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()),
            );
            setCourses(courseFind);
        }
    };
    const changeSemesterHandler = (event) => {
        if (event.target.value === '') {
            setCourses(courseList);
        } else {
            const courseFind = courseList.filter((course) => course.semester.trim() === event.target.value.trim());
            setCourses(courseFind);
        }
    };
    const clickHandler = () => {
        document.querySelector('#course').value = '';
        setCourses(courseList);
    };
    return (
        <div className='mx-6 px-[200px]'>
            <div className="ml-10 my-[10px]  text-[40px] font-semibold">Các khoá học của tôi</div>
            <div className="flex justify-between ">
                <div className='flex items-center'>
                    <input
                        type="text"
                        id="course"
                        placeholder="Tìm kiếm khoá học"
                        className="h-[50px] w-[450px] rounded-[10px] border-[1px] bg-white p-[10px] text-[25px]"
                        onChange={changeHandler}
                    />
                    <button className="h-[50px] w-[80px] rounded-[10px] bg-primary text-white" onClick={clickHandler}>
                        X
                    </button>
                </div>
                <div>
                    <select
                        name="semester"
                        id=""
                        className="h-[50px] w-[300px] rounded-[10px] border-[1px] bg-white p-[10px] text-[25px]"
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
                <div className="mt-[10px] flex h-screen items-center justify-center border-[1px] bg-white text-[35px] rounded-[20px]">
                    Không tìm thấy khoá học
                </div>
            ) : (
                courses.map((course, index) => {
                    return (
                        <Link to={`/student-course/${course.id}/info`} key={index}>
                            <CourseItem
                                img={course.img}
                                courseName={course.name}
                                teacher={course.teacher}
                                semester={course.semester}
                                group={course.group}
                            />
                        </Link>
                    );
                })
            )}
        </div>
    );
}
export default CoursePage;
