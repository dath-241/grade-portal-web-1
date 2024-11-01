import { useState, useEffect } from 'react';
import CourseItem from './components/course.component';
import { Link } from 'react-router-dom';

const courseList = Array.from({ length: 10 }, (_, index) => ({
    id: `CO2039`,
    name: 'Lập trình nâng cao',
    teacher: 'Lê Đình Thuận',
    semester: 'HK241',
    group: 'L08',
    status: 'Đang diễn ra',
}));

function CoursePage() {
    const [courses, setCourses] = useState(courseList);
    const semeters = ['Tất cả học kì', ...new Set(courseList.map((course) => course.semester))];
    const [randomImages, setRandomImages] = useState([]);

    // Hàm để xáo trộn mảng ảnh
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

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

    useEffect(() => {
        const imageIndices = Array.from({ length: 12 }, (_, i) => i + 1);

        shuffleArray(imageIndices);

        setRandomImages(imageIndices.slice(0, courses.length));
    }, [courses.length]);

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
                    const imageIndex = randomImages[index];
                    const imgSrc = imageIndex
                        ? require(`../../assets/img/bgCourses/bgCourses${imageIndex}.jpg`)
                        : require(`../../assets/img/bgCourses/bgCourses12.jpg`);
                    return (
                        <Link to={`/student-course/${course.id}/info`} key={index}>
                            <CourseItem
                                img={imgSrc}
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
