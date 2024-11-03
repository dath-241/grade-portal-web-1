
function CourseItem({id,courseName,teacher, semester, group}){
    return (
      <div className="bg-white  h-[160px] flex p-[10px] rounded-[20px] my-[10px] items-center shadow-lg hover:bg-[#F1F1F1]" >
         <img src={`https://avatar.iran.liara.run/public/${id}`} alt="" className="w-[190px] h-[120px] ml-[20px]"/>
         <div className="py-[10px] pl-[50px]">
          <div className="text-black text-[25px] font-light  ">
           {courseName}
          </div>
          <div className="text-black text-[25px] font-light  ">
            {teacher }
          </div>
          <div className="text-black text-[25px] font-light ">
             {semester} {group}
          </div>
         </div>
      </div>
    );
}

export default CourseItem;
