function CourseItem({ id, courseName, teacher, semester, group }) {
    return (
      <div className="my-6 flex h-[100px] items-center rounded-[20px] bg-white p-2 shadow-lg hover:bg-[#F1F1F1]">
            <img
                src={require(`../../../assets/img/bgCourses/bgCourses${id % 12 }.jpg`)}
                alt=""
                className="ml-2 h-[90%] w-[15%] rounded-lg object-cover"
            />
            <div className="space-y-2 pl-[50px]">
                <div className="text-lg font-normal text-[#204791]">
                    {courseName} {`[${group}]`}
                </div>
                <div className="text-lg text-black">{teacher}</div>
            </div>
        </div>
    );
}
export default CourseItem;
