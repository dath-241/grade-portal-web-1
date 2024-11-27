import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { fetchAllLecturerApi } from '../../apis/lecturers';

import LecturerIcon from '../../assets/img/teacher.png';
import { Link } from 'react-router-dom';

function LecturerList() {
    const [pageSize, setPageSize] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [lecturers, setLecturers] = useState([]);
    const [filteredLecturers, setFilteredLecturers] = useState([]);

    const handleGetLecturers = async () => {
        const lecturerData = await fetchAllLecturerApi();
        const formattedData = lecturerData.map((lecturer) => ({
            key: lecturer.ID,
            ms: lecturer.Ms,
            id: lecturer.ID,
            name: lecturer.Name,
            email: lecturer.Email,
            faculty: lecturer.Faculty,
            surName: lecturer.Name.split(' ')[0],
        }));
        setLecturers(formattedData);
        setFilteredLecturers(formattedData);
    };

    useEffect(() => {
        handleGetLecturers();
    }, []);

    const handleSearchLectures = (searchValue) => {
        if (!searchValue) {
            return lecturers.slice(0, pageSize);
        }

        return lecturers
            .filter(
                (lecturer) =>
                    lecturer.id.toString().toLowerCase().includes(searchValue) ||
                    lecturer.name.toLowerCase().includes(searchValue) ||
                    lecturer.surName.toLowerCase().includes(searchValue) ||
                    lecturer.email.toLowerCase().includes(searchValue) ||
                    lecturer.faculty.toLowerCase().includes(searchValue),
            )
            .slice(0, pageSize);
    };

    const handleSearch = (e) => {
        const value = e.target?.value?.toLowerCase();
        setSearchTerm(value);
        if (!value) {
            handleGetLecturers();
        } else {
            setFilteredLecturers(handleSearchLectures(value));
        }
    };

    const handlePageSizeChange = (value) => {
        setPageSize(value);
        setLecturers(handleSearchLectures());
    };

    const paginationOptions = {
        pageSize,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20'],
        onShowSizeChange: (current, size) => handlePageSizeChange(size),
    };

    const columns = [
        {
            title: <span style={{ fontWeight: '600' }}>MSGV</span>,
            dataIndex: 'ms',
            render: (text, record) => <Link to={`/management/lecturer-infor/${record.id}`}>{text}</Link>,
        },
        {
            title: <span style={{ fontWeight: '600' }}>Tên</span>,
            dataIndex: 'name',
            render: (text, record) => <Link to={`/management/lecturer-infor/${record.id}`}>{text}</Link>,
        },
        {
            title: <span style={{ fontWeight: '600' }}>Họ tên đệm</span>,
            dataIndex: 'surName',
            render: (text, record) => <Link to={`/management/lecturer-infor/${record.id}`}>{text}</Link>,
        },
        {
            title: <span style={{ fontWeight: '600' }}>Email</span>,
            dataIndex: 'email',
            render: (text, record) => <Link to={`/management/lecturer-infor/${record.id}`}>{text}</Link>,
        },
        {
            title: <span style={{ fontWeight: '600' }}>Khoa</span>,
            dataIndex: 'faculty',
            render: (text, record) => <Link to={`/management/lecturer-infor/${record.id}`}>{text}</Link>,
        },
    ];
    

    return (
        <div className="">
            {/* header */}
            <div className="flex justify-between">
                <div className="flex">
                    <div className="flex items-center">
                        <img src={LecturerIcon} alt="course" className="mt-2 h-24 w-24 p-2" />
                        <h1 className="text-3xl font-semibold">Giảng viên</h1>
                    </div>
                </div>

                <Link to="/add-teacher">
                    <div className="size-fit cursor-pointer rounded-lg bg-primary px-4 py-2 text-white shadow-inner hover:shadow-white">
                        Thêm giảng viên
                    </div>
                </Link>
            </div>

            {/* search */}
            <div className="my-6 flex justify-between">
                <div className="relative mt-1 rounded-full bg-white px-4 py-2 shadow outline-none">
                    <i className="fa-solid fa-magnifying-glass mr-2"></i>
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
                dataSource={filteredLecturers}
                pagination={paginationOptions}
                scroll={{
                    x: 900,
                }}
                className="rounded-lg border-[1px] border-[#EFF1F3] shadow"
                rowClassName="cursor-pointer"
            />
        </div>
    );
}

export default LecturerList;
