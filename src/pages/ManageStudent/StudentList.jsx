import React, { useState } from 'react';
import { Table } from 'antd';

import StudentIcon from '../../assets/img/student.png';

function StudentList() {
    const [pageSize, setPageSize] = useState(10);
    // const [dataSource, setDataSource] = useState([]);
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

    // const handleSearch = (e) => {
    //     const value = e.target.value.toLowerCase();

    //     const filtered = dataSource.filter((item) =>
    //         Object.keys(item).some((key) => String(item[key]).toLowerCase().includes(value)),
    //     );
    //     setFilteredData(filtered);
    // };

    return (
        <div className="">
            {/* header */}
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <img src={StudentIcon} alt="" className="w-20" />
                    <div className="">
                        <span>Bảng điều khiển / giảng viên</span>
                        <p className="text-2xl font-semibold">Sinh viên</p>
                    </div>
                </div>

                <div className="size-fit cursor-pointer rounded-lg bg-primary px-4 py-2 text-white shadow-inner hover:shadow-white">
                    thêm sinh viên
                </div>
            </div>

            {/* search */}
            <div className="my-6 flex justify-between">
                <div className="">
                    <input type="text" placeholder="Search" className="rounded-full px-4 py-2 shadow outline-none" />
                </div>

                <div className="flex items-center rounded-full bg-white px-4 py-2 shadow">
                    <i className="fa-solid fa-filter"></i>
                    <div className="ml-4 flex items-center gap-2">
                        <span>khoa</span>
                        <i className="fa-solid fa-angle-down mt-1"></i>
                    </div>
                </div>
            </div>

            {/* table */}
            <Table
                columns={columns}
                dataSource={data}
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
