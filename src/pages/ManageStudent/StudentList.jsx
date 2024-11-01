import React, { useState } from 'react';
import { Breadcrumb, Table } from 'antd';

import StudentIcon from '../../assets/img/student.png';
import { Link } from 'react-router-dom';

function StudentList() {
    const [pageSize, setPageSize] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    // const [filteredData, setFilteredData] = useState(dataSource);

    const data = Array.from({ length: 10 }, (_, index) => ({
        studentId: `22100${index + 1}`,
        name: 'An',
        surName: 'Nguyen Van',
        email: 'abc@hcmut.edu.vn',
        faculty: 'KH-KT máy tính',
    }));

    const handlePageSizeChange = (value) => {
        setPageSize(value);
    };

    const paginationOptions = {
        pageSize,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20'],
        onShowSizeChange: (current, size) => handlePageSizeChange(size),
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredData = data.filter(() => 
        Object.keys(item).some((key) =>
            String(item[key]).toLowerCase().includes(searchTerm)
        ) 
    );

    const columns = [
        {
            title: <span style={{ fontWeight: '600' }}>MSSV</span>,
            dataIndex: 'studentId',
        },
        {
            title: <span style={{ fontWeight: '600' }}>Tên</span>,
            dataIndex: 'name',
        },
        {
            title: <span style={{ fontWeight: '600' }}>Họ tên đệm</span>,
            dataIndex: 'surName',
        },
        {
            title: <span style={{ fontWeight: '600' }}>Email</span>,
            dataIndex: 'email',
        },
        {
            title: <span style={{ fontWeight: '600' }}>Khoa</span>,
            dataIndex: 'faculty',
        },
    ];

    return (
        <div className="">
            {/* header */}
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <img src={StudentIcon} alt="" className="w-20" />
                    {/* <div className="">
                        <span>Bảng điều khiển / Sinh viên</span>
                        <p className="text-2xl font-semibold">Sinh viên</p>
                    </div> */}
                    <div>
                        <Breadcrumb
                            items={[
                            {
                                title: <a href="/management">Bảng điều khiển</a>,
                            },
                            {
                                title: 'Sinh viên',
                            },
                            ]}
                        />
                        <p className="text-2xl font-semibold">Sinh viên</p>
                    </div>
                </div>
                <Link to="/add-student">
                    <div className="size-fit cursor-pointer rounded-lg bg-primary px-4 py-2 text-white shadow-inner hover:shadow-white">
                        thêm sinh viên
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
                        className=""
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
                dataSource={filteredData}
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
