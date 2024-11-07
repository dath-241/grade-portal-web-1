function ContentInside({ type, courseInfo }) {
    if (type === 'info') {
        return (
            <ul className="flex flex-col gap-[10px]">
                <li className="flex text-lg">
                    <div className="font-semibold">Lớp : </div>
                    <div className="ml-[5px]">{courseInfo.class}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Giảng viên : </div>
                    <div className="ml-[5px]">{courseInfo.teacher}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Số tín chỉ : </div>
                    <div className="ml-[5px]">{courseInfo.credit}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Trạng thái : </div>
                    <div className="ml-[5px]">{courseInfo.status}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Học kì : </div>
                    <div className="ml-[5px]">{courseInfo.semester}</div>
                </li>
            </ul>
        );
    } else if (type === 'grade') {
        const grade = courseInfo.score;
        console.log(grade);
        if (!grade) {
            return <div>Chưa có điểm</div>;
        }
        return (
            <ul className="flex flex-col gap-[10px]">
                <li className="flex text-lg">
                    <div className="font-semibold">Điểm bài tập : </div>
                    <div className="ml-[5px]">{grade.BT ? grade.BT : '_'}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Điểm thực hành : </div>
                    <div className="ml-[5px]">{grade.TN ? grade.TN : '_'}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Điểm bài tập lớn : </div>
                    <div className="ml-[5px]">{grade.BTL ? grade.BTL : '_'}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Điểm giữa kì : </div>
                    <div className="ml-[5px]">{grade.GK ? grade.GK : '_'}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Điểm cuối kì : </div>
                    <div className="ml-[5px]">{grade.CK ? grade.CK : '_'}</div>
                </li>
            </ul>
        );
    }
}

export default ContentInside;
