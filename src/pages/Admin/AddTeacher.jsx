import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CREATE_ACCOUNT_API_URL } from '../../constants/api';
import tick from '../../assets/img/tick.png';

function AddTeacher() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        ms: "",
        name: "",
        email: "",
        faculty: "",
        role: "teacher",
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
        if (formData.ms === '' || formData.name === '' || formData.email === '' || formData.faculty === '') {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }
        setError('');
        setShowSuccess(true);
        const Data = [formData];

        const token = localStorage.getItem('token');

        axios
            .post(CREATE_ACCOUNT_API_URL, Data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log('Teacher created');
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div className="flex h-full flex-col pb-2">
            <div>
                <Link to="/controller" className="rounded-lg px-2 py-2 text-gray-600 hover:text-black">
                    Bảng điều khiển
                </Link>
                <p className="text-gray inline-block px-2 py-2">/</p>
                <Link to="/home" className="rounded-lg px-2 py-2 text-gray-600 hover:text-black">
                    Giảng viên
                </Link>
                <p className="text-gray inline-block px-2 py-2">/</p>
                <Link to="/home" className="text-gray rounded-lg px-2 py-2">
                    Thêm GV
                </Link>
            </div>
            <div className="flex-1 rounded-lg bg-white p-8">
                <h1 className="text-3xl font-semibold">Thêm giảng viên</h1>

                <form className="grid grid-cols-2 grid-rows-2 gap-12 px-40 pt-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="ms" className="font-medium">
                            Mã
                        </label>
                        <input
                            type="text"
                            id="ms"
                            value={formData.ms}
                            onChange={handleInputChange}
                            className="border-gray rounded-md border bg-gray-100 p-2"
                            placeholder="Nhập mã giảng viên"
                        />
                        {error && <span className="text-red-500">{error}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-medium">
                            Tên
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border-gray rounded-md border bg-gray-100 p-2"
                            placeholder="Nhập tên giảng viên"
                        />
                        {error && <span className="text-red-500">{error}</span>}
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
                            placeholder="Nhập email giảng viên"
                        />
                        {error  && <span className="text-red-500">{error}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="faculty" className="font-medium">
                            Khoa
                        </label>
                        <select
                            id="faculty"
                            value={formData.faculty}
                            onChange={handleInputChange}
                            className="border-gray items-start rounded-md border bg-gray-100 p-2"
                        >
                            <option value="">Chọn khoa</option>
                            <option value="KHMT">Khoa học máy tính</option>
                            <option value="KTMT">Kỹ thuật máy tính</option>
                            <option value="KTHH">Kỹ thuật hóa học</option>
                            <option value="KTHN">Kỹ thuật hạt nhân</option>
                        </select>
                        {error && <span className="text-red-500">{error}</span>}
                    </div>

                    <div className="col-span-2 mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="rounded-md bg-[#112D4E] px-6 py-2 text-white hover:bg-[#132438]"
                        >
                            Thêm giảng viên
                        </button>
                    </div>
                </form>
                
            </div>
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-20 text-center">
                    <div className="mx-6 w-full max-w-md rounded-lg bg-[#ffffff] px-4 py-8 text-2xl font-medium text-black shadow-lg">
                        <img src={tick} alt="success" className="mx-auto mb-2 h-10 w-10" />
                        Thêm giảng viên thành công!
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddTeacher;
