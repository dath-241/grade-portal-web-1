import { Button, Col, Row, Table, Typography, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './StudentInfor.css';
import axios from 'axios';
import StudentIcon from '../../assets/img/student.png';

const { Title, Text } = Typography;


const CourseTable = ({ data }) => {
    const handleCheckResult = (subject) => {
        const scores = {
            quiz: 8.5,
            btl: 9.0,
            midterm: 7.5,
            final: 8.0,
        };

        const content = (
            <div>
                <p>
                    <strong>Môn học:</strong> {subject}
                </p>
                <p>
                    <strong>Điểm Quiz:</strong> {scores.quiz}
                </p>
                <p>
                    <strong>Điểm BTL:</strong> {scores.btl}
                </p>
                <p>
                    <strong>Điểm thi giữa kỳ:</strong> {scores.midterm}
                </p>
                <p>
                    <strong>Điểm thi cuối kỳ:</strong> {scores.final}
                </p>
            </div>
        );

        Modal.info({
            title: 'Thông tin điểm',
            content: content,
            onOk() {},
        });
    };

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
            title: 'Kết quả học tập',
            key: 'students',
            render: (_, record) => (
                <Button
                    className="button shadow-inner transition-transform hover:shadow-white"
                    type="primary"
                    onClick={() => handleCheckResult(record.subject)}
                >
                    Kiểm tra
                </Button>
            ),
        },
    ];

    return <Table className="custom-table" columns={columns} dataSource={data} pagination={false} />;
};

const StudentInfor = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [studentInfo, setStudentInfo] = useState({});

    useEffect(() => {
        const fetchStudentById = async () => {
            try {
                const response = await axios.get('http://localhost:4000/students');
                const student = response.data.find((student) => student.studentId.toString() === id);
                if (student) {
                    setStudentInfo(student);
                } else {
                    console.log('Not found student');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchStudentById();
    }, [id]);
    
    const data = [
        {
            key: '1',
            code: '#50',
            subject: 'Đồ án công nghệ phần mềm',
            class: 'L07',
        },
        {
            key: '2',
            code: '#50',
            subject: 'Mạng máy tính',
            class: 'L09',
        },
        {
            key: '3',
            code: '#50',
            subject: 'Công nghệ phần mềm',
            class: 'L05',
        },
        {
            key: '4',
            code: '#50',
            subject: 'Mô hình hóa',
            class: 'L03',
        },
        {
            key: '5',
            code: '#50',
            subject: 'Công nghệ phần mềm',
            class: 'L02',
        },
    ];

    const showDeleteConfirm = () => {
        Modal.confirm({
            title: 'Xác nhận xóa sinh viên',
            content: 'Bạn có chắc chắn muốn xóa sinh viên này?',
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
        <div className="student">
            <div className="mb-4 flex">
                <img src={StudentIcon} alt="course" className="w-20" />
                <div className="ml-4 space-y-2">
                    <ul className="mt-1 flex items-center gap-6 text-xl text-[#2E4053]">
                        <Link
                            to={'/management/student-list'}
                            className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400"
                        >
                            Danh sach sinh viên
                        </Link>
                        <div className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400">/</div>
                        <li className="font-roboto text-center text-sm font-semibold leading-5 text-gray-400">
                            Thông tin sinh viên
                        </li>
                    </ul>
                    <div className="font-roboto text-3xl font-semibold leading-none text-black">Sinh viên</div>
                </div>
            </div>
            <div className="p">
                <div className="profile">
                    <div className="profile-image">
                        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <div className="left">
                            <h2 className="text-2xl font-bold">Thông tin sinh viên:</h2>
                            <p>Họ và tên: {studentInfo.surName + ' ' + studentInfo.name || 'Chưa có thông tin'}</p>
                            <p>MSSV: {studentInfo.studentId || 'Chưa có thông tin'}</p>
                            <p>Email: {studentInfo.email || 'Chưa có thông tin'}</p>
                            <p>Số điện thoại: 090123xxxx</p>
                            <p>Khoa: {studentInfo.faculty || 'Chưa có thông tin'}</p>
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
                            className="ml-auto mt-auto border-none bg-[#dc3545] font-medium shadow-inner transition-transform  hover:shadow-third"
                        >
                            Xóa SV
                        </Button>
                    </div>
                </div>
                <div className="course mt-4">
                    <Title level={3}>Báo cáo khóa học</Title>
                    <CourseTable data={data} />
                </div>
            </div>
        </div>
    );
};

export default StudentInfor;