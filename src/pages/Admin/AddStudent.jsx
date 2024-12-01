import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddStudent() {
    const [formData, setFormData] = useState({
        code: '',
        email: '',
        phone: '',
        department: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex h-full flex-col pb-2">
            <div>
                <Link to="/controller" className="rounded-lg px-2 py-2 text-gray-600 hover:text-black">
                    Bảng điều khiển
                </Link>
                <p className="text-gray inline-block px-2 py-2">/</p>
                <Link to="/home" className="rounded-lg px-2 py-2 text-gray-600 hover:text-black">
                    Sinh viên
                </Link>
                <p className="text-gray inline-block px-2 py-2">/</p>
                <Link to="/home" className="text-gray rounded-lg px-2 py-2">
                    Thêm SV
                </Link>
            </div>
            <div className="flex-1 rounded-lg bg-white p-8">
                <h1 className="text-3xl font-semibold">Thêm sinh viên</h1>

                <form className="grid grid-cols-2 grid-rows-2 gap-12 px-40 pt-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="code" className="font-medium">
                            Mã
                        </label>
                        <input
                            type="text"
                            id="code"
                            value={formData.code}
                            onChange={handleInputChange}
                            className="border-gray rounded-md border bg-gray-100 p-2"
                            placeholder="Nhập mã sinh viên"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border-gray rounded-md border bg-gray-100 p-2"
                            placeholder="Nhập email sinh viên"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="font-medium">
                            Số điện thoại
                        </label>
                        <input
                            type="text"
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border-gray rounded-md border bg-gray-100 p-2"
                            placeholder="Nhập số điện thoại sinh viên"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="department" className="font-medium">
                            Khoa
                        </label>
                        <select
                            id="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            className="border-gray items-start rounded-md border bg-gray-100 p-2"
                        >
                            <option value="">Chọn khoa</option>
                            <option value="computerScienceEngineering">KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH</option>
                            <option value="mechanicalEngineering">KHOA CƠ KHÍ</option>
                            <option value="chemicalEngineering">KHOA KỸ THUẬT HÓA HỌC</option>
                            <option value="geoEngineering">KHOA KỸ THUẬT ĐỊA CHẤT VÀ DẦU KHÍ</option>
                            <option value="environmentEngineering">KHOA MÔI TRƯỜNG VÀ TÀI NGUYÊN</option>
                            <option value="transportationEngineering">KHOA KỸ THUẬT GIAO THÔNG</option>
                            <option value="industrialManagementEngineering">KHOA QUẢN LÝ CÔNG NGHIỆP</option>
                            <option value="materialEngineering">KHOA CÔNG NGHỆ VẬT LIỆU</option>
                            <option value="civilEngineering">KHOA KỸ THUẬT XÂY DỰNG</option>
                            <option value="electicalEngineering">KHOA ĐIỆN - ĐIỆN TỬ</option>
                        </select>
                    </div>

                    <div className="col-span-2 mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="rounded-md bg-[#112D4E] px-6 py-2 text-white hover:bg-[#132438]"
                        >
                            Thêm sinh viên
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddStudent;
