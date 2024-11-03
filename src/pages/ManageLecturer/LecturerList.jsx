import React, { useState, useEffect } from 'react';
import { Breadcrumb, Table } from 'antd';
import { fetchAllLecturerApi } from '../../apis/lecturers';

import LecturerIcon from '../../assets/img/teacher.png';
import { Link } from 'react-router-dom';

function LecturerList() {
    const [pageSize, setPageSize] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [lecturers, setLecturers] = useState([]);
    
    const getLecturers = async () => {
        const lecturerData =  await fetchAllLecturerApi();
        setLecturers(lecturerData);
    };

    useEffect(() => {
        getLecturers();
    }, []);


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

    const columns = [
        {
            title: <span style={{ fontWeight: '600' }}>MSSV</span>,
            dataIndex: 'id',
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
                    <img src={LecturerIcon} alt="" className="w-20" />
                    <div>
                        <Breadcrumb
                            items={[
                            {
                                title: <a href="/management">Bảng điều khiển</a>,
                            },
                            {
                                title: 'Giảng viên',
                            },
                            ]}
                        />
                        <p className="text-2xl font-semibold">Giảng viên</p>
                    </div>
                </div>

                <Link to="/add-teacher">
                    <div className="size-fit cursor-pointer rounded-lg bg-primary px-4 py-2 text-white shadow-inner hover:shadow-white">
                        thêm giảng viên
                    </div>
                </Link>
            </div>

            {/* search */}
            <div className="my-6 flex justify-between">
                <div className="relative mt-1 rounded-full bg-white px-4 py-2 shadow outline-none">
                    <i class="fa-solid fa-magnifying-glass mr-2"></i>
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
                dataSource={lecturers}
                pagination={paginationOptions}
                scroll={{
                    x: 900,
                }}
                className="rounded-lg border-[1px] border-[#EFF1F3] shadow"
            />
        </div>
    );
}

export default LecturerList;
