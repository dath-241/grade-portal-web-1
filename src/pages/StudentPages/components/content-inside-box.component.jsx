function ContentInside({ type, courseInfo }) {
    if (type === 'info') {
        return (
            <ul className="flex flex-col gap-[10px]">
                <li className="flex text-lg">
                    <div className="font-semibold">Lớp : </div>
                    <div className="ml-[5px]">{courseInfo.Name}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Giảng viên : </div>
                    <div className="ml-[5px]">{courseInfo.teacherName}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Học kì : </div>
                    <div className="ml-[5px]">{courseInfo.Semester}</div>
                </li>
            </ul>
        );
    } else if (type === 'grade') {
        console.log(courseInfo)
        if (!courseInfo) {
            return <div>Chưa có điểm</div>;
        }
        return (
            <ul className="flex flex-col gap-[10px]">
                <li className="flex text-lg">
                    <div className="font-semibold">Điểm bài tập : </div>
                    <div className="ml-[5px]">{courseInfo.BT != null ? courseInfo.BT : '_'}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Điểm thực hành : </div>
                    <div className="ml-[5px]">{courseInfo.TN != null ? courseInfo.TN : '_'}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Điểm bài tập lớn : </div>
                    <div className="ml-[5px]">{courseInfo.BTL != null ? courseInfo.BTL : '_'}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Điểm giữa kì : </div>
                    <div className="ml-[5px]">{courseInfo.GK != null ? courseInfo.GK : '_'}</div>
                </li>
                <li className="flex text-lg">
                    <div className="font-semibold">Điểm cuối kì : </div>
                    <div className="ml-[5px]">{courseInfo.CK != null ? courseInfo.CK : '_'}</div>
                </li>
            </ul>
        );
    }
}

export default ContentInside;
