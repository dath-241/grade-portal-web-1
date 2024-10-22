import { useState } from 'react';
import CourseItem from './components/course.component';
import { Link } from 'react-router-dom';
const courseList = [
    {
        id: 'CO2017',
        img: 'https://c4.wallpaperflare.com/wallpaper/821/698/393/anime-naruto-akatsuki-naruto-deidara-naruto-wallpaper-preview.jpg',
        name: 'Database Sysytem',
        teacher: 'Nguyen Thi Bao Thu',
        semester: 'HK211',
        group: 'L04',
    },
    {
        id: 'CO3017',
        img: 'https://c4.wallpaperflare.com/wallpaper/821/698/393/anime-naruto-akatsuki-naruto-deidara-naruto-wallpaper-preview.jpg',
        name: 'Computer Networking',
        teacher: 'Nguyen Phuong Duy',
        semester: 'HK221',
        group: 'L02',
    },
    {
        id: 'CO3018',
        img: 'https://c4.wallpaperflare.com/wallpaper/821/698/393/anime-naruto-akatsuki-naruto-deidara-naruto-wallpaper-preview.jpg',
        name: 'Introduction to Artificial Intelligent',
        teacher: 'Vuong Ba Thinh',
        semester: 'HK231',
        group: 'L01',
    },
    {
        id: 'CO2018',
        img: 'https://c4.wallpaperflare.com/wallpaper/821/698/393/anime-naruto-akatsuki-naruto-deidara-naruto-wallpaper-preview.jpg',
        name: 'Computer Architecture',
        teacher: 'Nguyen Thanh Binh',
        semester: 'HK231',
        group: 'L01',
    },
];

function CoursePage() {
    const [courses, setCourses] = useState(courseList);
    const semeters = ['Tất cả học kì', ...new Set(courseList.map((course) => course.semester))];
    const changeHandler = (event) => {
        if (event.target.value === '') {
            setCourses(courseList);
        } else {
            const courseFind = courseList.filter((course) => course.name.trim().includes(event.target.value.trim()));
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
        <>
            <h1 className="ml-[260px] mt-[10px] font-['Roboto'] text-[35px] font-semibold">Khoá học của tôi</h1>
            <div className="flex justify-between">
                <div>
                    <input
                        type="text"
                        id="course"
                        placeholder="Tìm kiếm khoá học"
                        className="ml-[160px] mt-[10px] h-[50px] w-[450px] rounded-[10px] border-[1px] bg-white p-[10px] text-[25px]"
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
                        className="mr-[155px] mt-[10px] h-[50px] w-[300px] rounded-[10px] border-[1px] bg-white p-[10px] text-[25px]"
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
                <div className="mt-[10px] flex h-screen items-center justify-center border-[1px] bg-white text-[35px]">
                    Không tìm thấy khoá học
                </div>
            ) : (
                courses.map((course, index) => {
                    return (
                        <Link to={`/course/${course.id}/info`} key={index}>
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
        </>
    );
}
export default CoursePage;
