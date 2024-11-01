import { Button, Table, Typography, Modal } from 'antd';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LecturerInfor.css';
import LecturerIcon from '../../assets/img/teacher.png';

const { Title, Text } = Typography;

const CourseTable = ({ data }) => {
    const columns = [
        {
            title: 'Mã môn học',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Môn học',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Lớp học',
            dataIndex: 'class',
            key: 'class',
        },
        {
            title: 'Số lượng sinh viên',
            dataIndex: 'students',
            key: 'students',
        },
    ];

    return <Table className="custom-table" columns={columns} dataSource={data} pagination={false} />;
};

const TeacherInfor = () => {
    const navigate = useNavigate();

    const data = [
        {
            key: '1',
            code: '#50',
            subject: 'Đồ án công nghệ phần mềm',
            class: 'L07',
            students: 80,
        },
        {
            key: '2',
            code: '#50',
            subject: 'Mạng máy tính',
            class: 'L09',
            students: 80,
        },
        {
            key: '3',
            code: '#50',
            subject: 'Công nghệ phần mềm',
            class: 'L05',
            students: 80,
        },
        {
            key: '4',
            code: '#50',
            subject: 'Mô hình hóa',
            class: 'L03',
            students: 80,
        },
        {
            key: '5',
            code: '#50',
            subject: 'Công nghệ phần mềm',
            class: 'L02',
            students: 80,
        },
    ];

    const showDeleteConfirm = () => {
        Modal.confirm({
            title: 'Xác nhận xóa giảng viên',
            content: 'Bạn có chắc chắn muốn xóa giảng viên này?',
            okText: 'Xác nhận',
            cancelText: 'Đóng',
            onOk() {
                navigate('/home');
            },
            onCancel() {
                console.log('Đóng modal');
            },
        });
    };

    return (
        <div className="lecturer">
            <div className="mb-4 flex">
                <img src={LecturerIcon} alt="course" className="w-20" />
                <div className="ml-4 space-y-2">
                    <ul className="mt-1 flex items-center gap-6 text-xl text-[#2E4053]">
                        <Link
                            to={'/management/lecturer-list'}
                            className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400"
                        >
                            Danh sach giảng viên
                        </Link>
                        <div className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400">/</div>
                        <li className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400">
                            Thông tin giảng viên
                        </li>
                    </ul>
                    <div className="font-roboto text-3xl font-semibold leading-none text-black">Giảng viên</div>
                </div>
            </div>
            <div className="p">
                <div className="profile">
                    <div className="profile-image">
                        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <div className="left space-y-2 font-semibold">
                            <p>
                                Họ và tên:
                                <span className="ml-2 font-normal"> Nguyễn Văn A</span>
                            </p>
                            <p>
                                Mã số: <span className="ml-2 font-normal"> 2217639</span>
                            </p>
                            <p>
                                Email: <span className="ml-2 font-normal"> abc@hcmut.edu.vn</span>
                            </p>
                            <p>
                                Số điện thoại: <span className="ml-2 font-normal"> 19006791</span>
                            </p>
                            <p>
                                Khoa: <span className="ml-2 font-normal"> Khoa học và kĩ thuật máy tính</span>
                            </p>
                        </div>
                        <div className="right left space-y-2 font-semibold">
                            <p>
                                Ngày tạo: <span className="ml-2 font-normal">16:04 32/02/2015</span>
                            </p>
                            <p>
                                Người tạo: <span className="ml-2 font-normal"> Admin 007</span>
                            </p>
                        </div>
                        <Button
                            style={{
                                backgroundColor: '#dc3545',
                                borderColor: 'transparent',
                                color: '#fff',
                            }}
                            onClick={showDeleteConfirm}
                            className="ml-auto mt-auto border-none bg-[#dc3545] font-medium shadow-inner transition-transform hover:shadow-third"
                        >
                            Xóa SV
                        </Button>
                    </div>
                </div>
                <div className="course mt-4">
                    <Title level={3}>Danh sách môn học</Title>
                    <CourseTable data={data} />
                </div>
            </div>
        </div>
    );
};

export default TeacherInfor;
