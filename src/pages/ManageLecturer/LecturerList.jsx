import LecturerIcon from '../../assets/img/teacher.png';

function LecturerList() {
    return (
        <div className="">
            {/* header */}
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <img src={LecturerIcon} alt="" className="w-20" />
                    <div className="">
                        <span>Bảng điều khiển / giảng viên</span>
                        <p className="text-2xl font-semibold">Giảng viên</p>
                    </div>
                </div>

                <div className="size-fit cursor-pointer rounded-lg bg-primary px-4 py-2 text-white shadow-inner hover:shadow-white">
                    thêm giảng viên
                </div>
            </div>

            {/* search */}
            <div className="mt-6 flex justify-between">
                <div className="">
                    <input type="text" placeholder="Search" className="rounded-full px-4 py-2 shadow outline-none" />
                </div>

                <div className=" bg-white rounded-full flex items-center px-4 py-2 shadow">
                    <i className="fa-solid fa-filter"></i>
                    <div className=' flex ml-4 items-center gap-2'>
                        <span>khoa</span>
                        <i className="fa-solid fa-angle-down mt-1"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LecturerList;
