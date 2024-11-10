function ContentBox({ courseInfo, title }) {
  return(
    <div className="my-[10px] ml-[100px] h-[500px]  rounded-[20px] border-[1px] bg-white p-[10px] shadow-md">
        <div className="ml-[30px] text-[35px] font-semibold">{title}</div>
        <hr className="my-[10px] ml-[30px] w-[900px]" />
        <div className="ml-[30px]">
            <ul className="flex flex-col gap-[10px]">
                <li className="flex text-[30px]">
                    <div className="font-semibold">Lớp : </div>
                    <div className="ml-[5px] font-light">{courseInfo.group}</div>
                </li>
                <li className="flex text-[30px]">
                    <div className="font-semibold">Giảng viên : </div>
                    <div className="ml-[5px] font-light">{courseInfo.teacher}</div>
                </li>
                <li className="flex text-[30px]">
                    <div className="font-semibold">Email : </div>
                    <div className="ml-[5px] font-light">{courseInfo.id}</div>
                </li>
            </ul>
        </div>
    </div>
  )
 
}
export default ContentBox;
