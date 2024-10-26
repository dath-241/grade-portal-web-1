import { Button, Col, Row, Table, Typography, Modal } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentInfor.css';

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
                <Button className="button" type="primary" onClick={() => handleCheckResult(record.subject)}>
                    Kiểm tra
                </Button>
            ),
        },
    ];

    return (
        <Table className="custom-table" columns={columns} dataSource={data} pagination={false} scroll={{ y: 200 }} />
    );
};

const Sinhvien2 = () => {
    const navigate = useNavigate();

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
            <Row className="control">
                <Col className="breadcrumb">
                    <Button type="link">Bảng điều khiển</Button>
                    <Text>/</Text>
                    <Button type="link">Giảng viên</Button>
                    <Text>/</Text>
                    <Button type="link">Thông tin SV</Button>
                </Col>
            </Row>
            <div className="p">
                <div className="profile">
                    <div className="profile-image">
                        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <div className="left">
                            <h2>Thông tin sinh viên:</h2>
                            <p>Họ và tên: Nguyễn Văn A</p>
                            <p>MSSV: 2211111</p>
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
                    <Title level={3}>Báo cáo khóa học</Title>
                    <CourseTable data={data} />
                </div>
            </div>
        </div>
    );
};

export default Sinhvien2;
