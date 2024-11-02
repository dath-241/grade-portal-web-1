function ContentInside({ type, courseInfo }) {
    if (type === 'info') {
        return (
            <ul className="flex flex-col gap-[10px]">
                <li className="flex text-[30px]">
                    <div className="font-semibold">Lớp : </div>
                    <div className="ml-[5px] font-light">{courseInfo.class}</div>
                </li>
                <li className="flex text-[30px]">
                    <div className="font-semibold">Giảng viên : </div>
                    <div className="ml-[5px] font-light">{courseInfo.teacher}</div>
                </li>
                <li className="flex text-[30px]">
                    <div className="font-semibold">Số tín chỉ : </div>
                    <div className="ml-[5px] font-light">{courseInfo.credit}</div>
                </li>
                <li className="flex text-[30px]">
                    <div className="font-semibold">Trạng thái : </div>
                    <div className="ml-[5px] font-light">{courseInfo.status}</div>
                </li>
                <li className="flex text-[30px]">
                    <div className="font-semibold">Học kì : </div>
                    <div className="ml-[5px] font-light">{courseInfo.semester}</div>
                </li>
            </ul>
        );
    } else if (type === 'grade') {
        const grade = courseInfo.score
        return (
            <ul className="flex flex-col gap-[10px]">
                <li className="flex text-[30px]">
                    <div className="font-semibold">Điểm bài tập : </div>
                    <div className="ml-[5px] font-light">{grade.BT ? grade.BT : "_" }</div>
                </li>
                <li className="flex text-[30px]">
                    <div className="font-semibold">Điểm thực hành : </div>
                    <div className="ml-[5px] font-light">{ grade.TN ? grade.TN : "_"}</div>
                </li>
                <li className="flex text-[30px]">
                    <div className="font-semibold">Điểm bài tập lớn : </div>
                    <div className="ml-[5px] font-light">{ grade.BTL? grade.BTL: "_"}</div>
                </li>
                <li className="flex text-[30px]">
                    <div className="font-semibold">Điểm giữa kì : </div>
                    <div className="ml-[5px] font-light">{grade.GK? grade.GK: "_"}</div>
                </li>
                <li className="flex text-[30px]">
                    <div className="font-semibold">Điểm cuối kì : </div>
                    <div className="ml-[5px] font-light">{grade.CK? grade.CK: "_"}</div>
                </li>
            </ul>
        );
    }
}


export default ContentInside