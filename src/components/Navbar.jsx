import HCMUT from "../assets/img/hcmut.png";

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <img src= {HCMUT} alt="" style={{width: 50}}/>
      <h1> BK Tra cứu </h1>
      <div className="link">
        <a href="/"> Trang chủ </a>
        <a href="/creat" style={{
          color: "white",
          backgroundColor: '#112D4E',
          borderRadius: '8px'
        }}> Bảng điều khiển </a>
        <a href="/"> Khoá học </a>
        <a href="/"> Vinh danh </a>
      </div>
    </nav>
   );
}
 
export default Navbar;