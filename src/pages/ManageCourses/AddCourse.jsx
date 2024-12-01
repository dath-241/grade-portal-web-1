import React, { useState } from 'react';
import axios from 'axios';
import tick from '../../assets/img/tick.png';

const AddCourse = () => {
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseDesc, setCourseDesc] = useState('');
    const [credit, setCredit] = useState('');
    const [bt, setBt] = useState('');
    const [tn, setTn] = useState('');
    const [btl, setBtl] = useState('');
    const [gk, setGk] = useState('');
    const [ck, setCk] = useState('');
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const ADMIN_API_URL = process.env.REACT_APP_ADMIN_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            courseCode === '' ||
            courseName === '' ||
            credit === '' ||
            bt === '' ||
            tn === '' ||
            btl === '' ||
            gk === '' ||
            ck === ''
        ) {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }
        setError('');
        setLoading(true);
        const courseData = {
            ms: courseCode,
            credit: credit,
            name: courseName,
            desc: courseDesc,
            BT: bt,
            TN: tn,
            BTL: btl,
            GK: gk,
            CK: ck,
        };

        const token = localStorage.getItem('token');

        try {
            await axios.post(`${ADMIN_API_URL}/course/create`, courseData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);

            // Reset form
            setCourseCode('');
            setCourseName('');
            setCourseDesc('');
            setCredit('');
            setBt('');
            setTn('');
            setBtl('');
            setGk('');
            setCk('');
            setError('');
        } catch (error) {
            console.error('Error creating course:', error);
            setError('Đã xảy ra lỗi khi thêm môn học.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto w-3/5 rounded-lg bg-white p-8 shadow-lg">
            <h1 className="mb-6 text-2xl font-semibold">Thêm môn học</h1>
            <form onSubmit={handleSubmit} className="">
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-base font-medium">Mã môn học:</label>
                        <input
                            type="text"
                            value={courseCode}
                            onChange={(e) => setCourseCode(e.target.value)}
                            className="w-full rounded-md border border-gray-300 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-base font-medium">Tên môn học:</label>
                        <input
                            type="text"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            className="w-full rounded-md border border-gray-300 p-2"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-base font-medium">Mô Tả :</label>
                    <textarea
                        value={courseDesc}
                        onChange={(e) => setCourseDesc(e.target.value)}
                        className="w-full rounded-md border border-gray-300 p-2"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-base font-medium">Số Tín Chỉ:</label>
                    <input
                        type="number"
                        value={credit}
                        onChange={(e) => {
                            const value = e.target.value;
                            setCredit(value === '' ? '' : Math.max(0, parseInt(value, 10)));
                        }}
                        className="w-[calc(50%-0.5rem)] rounded-md border border-gray-300 p-2"
                    />
                </div>
                <h2 className="mb-4 mt-8 text-xl font-semibold">Điểm thành phần</h2>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-base font-medium">Điểm BT:</label>
                        <input
                            type="number"
                            value={bt}
                            onChange={(e) => {
                                const value = e.target.value;
                                setBt(value === '' ? '' : Math.max(0, parseInt(value, 10)));
                            }}
                            className="w-full rounded-md border border-gray-300 p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-base font-medium">Điểm TN:</label>
                        <input
                            type="number"
                            value={tn}
                            onChange={(e) => {
                                const value = e.target.value;
                                setTn(value === '' ? '' : Math.max(0, parseInt(value, 10)));
                            }}
                            className="w-full rounded-md border border-gray-300 p-2"
                        />
                    </div>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-base font-medium">Điểm BTL:</label>
                        <input
                            type="number"
                            value={btl}
                            onChange={(e) => {
                                const value = e.target.value;
                                setBtl(value === '' ? '' : Math.max(0, parseInt(value, 10)));
                            }}
                            className="w-full rounded-md border border-gray-300 p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-base font-medium">Điểm GK:</label>
                        <input
                            type="number"
                            value={gk}
                            onChange={(e) => {
                                const value = e.target.value;
                                setGk(value === '' ? '' : Math.max(0, parseInt(value, 10)));
                            }}
                            className="w-full rounded-md border border-gray-300 p-2"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-base font-medium">Điểm CK:</label>
                    <input
                        type="number"
                        value={ck}
                        onChange={(e) => {
                            const value = e.target.value;
                            setCk(value === '' ? '' : Math.max(0, parseInt(value, 10)));
                        }}
                        className="w-[calc(50%-0.5rem)] rounded-md border border-gray-300 p-2"
                    />
                </div>

                {error && <div className="mb-4 text-red-500">{error}</div>}

                <div className="flex items-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`pytext-base mx-auto mt-6 rounded-xl px-4 py-2 font-medium text-white shadow-inner ${
                            loading ? 'bg-gray-400' : 'bg-primary hover:shadow-white'
                        }`}
                    >
                        {loading ? 'Đang xử lý...' : 'Thêm môn học'}
                    </button>
                </div>
            </form>

            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-20 text-center">
                    <div className="text-2text-base mx-6 w-full max-w-md rounded-lg bg-[#ffffff] px-4 py-8 font-medium text-black shadow-lg">
                        <img src={tick} alt="success" className="mx-auto mb-2 h-10 w-10" />
                        Thêm môn học thành công!
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddCourse;
