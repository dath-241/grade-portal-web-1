import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddStudent() {
    const [formData, setFormData] = useState({
        code: '',
        email: '',
        phone: '',
        department: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
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
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="department" className="font-medium">
                            Khoa
                        </label>
                        <select
                            id="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            className="border-gray rounded-md border bg-gray-100 items-start p-2"
                        >
                            <option value="">Chọn khoa</option>
                            <option value="computerScience">Khoa học máy tính</option>
                            <option value="computerEngineering">Kỹ thuật máy tính</option>
                            <option value="chemicalEngineering">Kỹ thuật hóa học</option>
                            <option value="nuclearEngineering">Kỹ thuật hạt nhân</option>
                        </select>
                    </div>

                    <div className="col-span-2 flex justify-center mt-8">
                        <button
                            type="submit"
                            className="bg-[#112D4E] text-white px-6 py-2 rounded-md hover:bg-[#132438]"
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
