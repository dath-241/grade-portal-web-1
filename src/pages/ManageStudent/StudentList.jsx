import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { fetchAllStudentApi } from '../../apis/students';
import StudentIcon from '../../assets/img/student.png';
import { Link } from 'react-router-dom';
function StudentList() {
    const [pageSize, setPageSize] = useState(10);
    const [data, setData] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchAllStudentApi();
    }, []);
    const handleSearchStudents = (searchValue) => {
        if (!searchValue) {
            return data.slice(0, pageSize);
        }

        return data
            .filter(
                (data) =>
                    data.studentId.toString().includes(searchValue) ||
                    data.name.includes(searchValue) ||
                    data.surName.includes(searchValue) ||
                    data.email.includes(searchValue) ||
                    data.faculty.includes(searchValue),
            )
            .slice(0, pageSize);
    };

    const handleSearch = (e) => {
        const value = e.target?.value;
        setSearchTerm(value);
        if (!value) {
            setFilteredStudents(data);
        } else {
            setFilteredStudents(handleSearchStudents(value));
        }
    };
    const handlePageSizeChange = (value) => {
        setPageSize(value);
        setData(handleSearchStudents());
    };

    const paginationOptions = {
        pageSize,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20'],
        onShowSizeChange: (current, size) => handlePageSizeChange(size),
    };

    const renderRow = (text, record, columnKey) => (
        <Link to={`/management/student-infor/${record.studentId}`} style={{ display: 'block' }}>
            <div style={{ padding: '8px 16px' }}>{record[columnKey]}</div>
        </Link>
    );
    
    const columns = [
        {
            title: <span style={{ fontWeight: '600' }}>MSSV</span>,
            dataIndex: 'studentId',
            render: (text, record) => renderRow(text, record, 'studentId'),
        },
        {
            title: <span style={{ fontWeight: '600' }}>Tên</span>,
            dataIndex: 'name',
            render: (text, record) => renderRow(text, record, 'name'),
        },
        {
            title: <span style={{ fontWeight: '600' }}>Họ tên đệm</span>,
            dataIndex: 'surName',
            render: (text, record) => renderRow(text, record, 'surName'),
        },
        {
            title: <span style={{ fontWeight: '600' }}>Email</span>,
            dataIndex: 'email',
            render: (text, record) => renderRow(text, record, 'email'),
        },
        {
            title: <span style={{ fontWeight: '600' }}>Khoa</span>,
            dataIndex: 'faculty',
            render: (text, record) => renderRow(text, record, 'faculty'),
        },
    ];

    return (
        <div className="">
            {/* header */}
            <div className="flex justify-between">
            <div className="flex">
                    <div className="flex items-center">
                        <img src={StudentIcon} alt="course" className="h-24 w-24 p-2 mt-2" />
                        <h1 className="text-3xl font-semibold">Sinh viên</h1>
                    </div>
                </div>

                <Link to="/add-student">
                    <div className="size-fit cursor-pointer rounded-lg bg-primary px-4 py-2 text-white shadow-inner hover:shadow-white">
                        Thêm sinh viên
                    </div>
                </Link>
            </div>

            {/* search */}
            <div className="my-6 flex justify-between">
                <div className="relative mt-1 rounded-full bg-white px-4 py-2 shadow outline-none">
                    <i class="fa-solid fa-magnifying-glass mr-2 text-gray-400"></i>
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm" 
                        className="outline-none"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

                <div className="flex items-center rounded-full bg-white px-4 py-2 shadow">
                    <i className="fa-solid fa-filter"></i>
                    <div className="ml-4 flex items-center gap-2">
                        <span>Khoa</span>
                        <i className="fa-solid fa-angle-down mt-1"></i>
                    </div>
                </div>
            </div>

            {/* table */}
            <Table
                columns={columns}
                dataSource={filteredStudents}
                pagination={paginationOptions}
                scroll={{
                    x: 900,
                }}
                className="rounded-lg border-[1px] border-[#EFF1F3] shadow"
            />
        </div>
    );
}

export default StudentList;
