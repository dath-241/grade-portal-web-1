import { useParams } from "react-router-dom";
import Switch from "./components/switch.component";
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

function GradeInfo(){
  const { id } = useParams() 
  const courseInfo = courseList.find(course => course.id === id)
  return(
     <>
         <div className="text-[40px] flex justify-center text-[#012193] font-[600px]">
             {courseInfo.name}
         </div>
         <Switch id={id} active="grade"/>
         <div className="w-[1000px] h-[500px] bg-white my-[10px] rounded-[20px] border-[1px] shadow-md ml-[100px] p-[10px]">
           <div className="text-[35px] font-semibold ml-[30px]"> 
             Điểm số
           </div>
           <hr className="w-[900px] ml-[30px]"/>
            <div>
              <ul className="flex flex-col">
                <li className="flex text-[30px]">
                   <div className="font-semibold" >Lớp : </div>
                   <div className="font-light ml-[5px]">{courseInfo.group}</div>
                </li>
                <li className="flex text-[30px]">
                   <div className="font-semibold" >Giảng viên : </div>
                   <div className="font-light ml-[5px]">{courseInfo.teacher}</div>
                </li>
                <li className="flex text-[30px]">
                   <div className="font-semibold" >Email : </div>
                   <div className="font-light ml-[5px]">{courseInfo.id}</div>
                </li>
              </ul>
            </div>
         </div>
     </>
  )
}
export default GradeInfo