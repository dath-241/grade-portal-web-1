import { Button, Col, Row, Table, Typography, Modal } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LecturerInfor.css';

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

    return (
        <Table className="custom-table" columns={columns} dataSource={data} pagination={false} scroll={{ y: 200 }} />
    );
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
            <Row className="control">
                <Col className="breadcrumb">
                    <Button type="link">Bảng điều khiển</Button>
                    <Text>/</Text>
                    <Button type="link">Giảng viên</Button>
                    <Text>/</Text>
                    <Button type="link">Thông tin GV</Button>
                </Col>
            </Row>
            <div className="p">
                <div className="profile">
                    <div className="profile-image">
                        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <div className="left">
                            <h2>Thông tin giảng viên:</h2>
                            <p>Họ và tên: Nguyễn Văn A</p>
                            <p>Mã số: 2211111</p>
                            <p>Email: example@hcmut.edu.vn</p>
                            <p>Số điện thoại: 090123xxxx</p>
                            <p>Khoa: Khoa học và Kỹ thuật máy tính</p>
                        </div>
                        <div className="right">
                            <br></br>
                            <br></br>
                            <p>Số điện thoại: 090123xxxx</p>
                            <p>Khoa: Khoa học và Kỹ thuật máy tính</p>
                            <br></br>
                            <br></br>
                            <Button type="primary" danger onClick={showDeleteConfirm}>
                                Xóa GV
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="course">
                    <Title level={3}>Danh sách môn học</Title>
                    <CourseTable data={data} />
                </div>
            </div>
        </div>
    );
};

export default TeacherInfor;
