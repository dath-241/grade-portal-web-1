import ContentInside from './content-inside-box.component';

function ContentBox({ courseInfo, title, type }) {
    return (
        <div className=" mt-6 h-[500px] rounded-[20px] border-[1px] bg-white p-[10px] shadow-md">
            <div className="ml-[30px] text-2xl font-semibold">{title}</div>
            <hr className="my-[10px] w-full" />
            <div className="ml-[30px]">
                <ContentInside courseInfo={courseInfo} type={type} />
            </div>
        </div>
    );
}
export default ContentBox;