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

    const facultyMapping = {
        'computerScienceEngineering': ['KHMT', 'KTMT'],
        'mechanicalEngineering': ['CK'],
        'chemicalEngineering': ['KTHH'],
        'geoEngineering': ['KTDG'],
        'environmentEngineering': ['MTTN'],
        'transportationEngineering': ['KTGT'],
        'industrialManagementEngineering': ['QLCN'],
        'materialEngineering': ['CNVL'],
        'civilEngineering': ['KTXD'],
        'electicalEngineering': ['DDE'],
    };
    
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
                    lecturer.ms.toString().toLowerCase().includes(searchValue) ||
                    lecturer.name.toLowerCase().includes(searchValue) ||
                    lecturer.surName.toLowerCase().includes(searchValue) ||
                    lecturer.email.toLowerCase().includes(searchValue) ||
                    lecturer.faculty.toLowerCase().includes(searchValue),
            )
            .slice(0, pageSize);
    }; 
    
    const handleSearch = (e) => {
        const value = e.target?.value;
        setSearchTerm(value);
        if (!value) {
            handleGetLecturers();
        } else {
            setFilteredLecturers(handleSearchLectures(value));
            console.log("return data xyz: ", filteredLecturers);
        }
    };

    const handleFilterLectures = (faculty, source = lecturers) => {
        if (!faculty) {
            handleGetLecturers();
        }

        if (facultyMapping[faculty]) {
            const filtered = source.filter((lecturer) => {
                const normalizedLecturerFaculty = lecturer.faculty?.toLowerCase() || '';
                return facultyMapping[faculty].some((facultyCode) =>
                    normalizedLecturerFaculty.includes(facultyCode.toLowerCase())
                );
            });
            return filtered;
        }
    };   
    
    const handleFilter = (faculty) => {
        setFilteredLecturers(handleFilterLectures(faculty)); // Cập nhật lại danh sách giảng viên
    };

    const [formData, setFormData] = useState({
        faculty: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });

        handleFilter(e.target.value);
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
            title: <span style={{ fontWeight: '600' }}>Họ và tên</span>,
            dataIndex: 'name',
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
                    <select
                        id="department"
                        value={formData.department}
                        onChange={(e) => {
                            handleInputChange(e); // Giữ nguyên hàm này để cập nhật giá trị chọn
                            handleFilter(e.target.value); // Thực hiện lọc giảng viên theo khoa
                        }}
                        className="ml-2 flex items-center gap-2"
                    >
                        <option value="">Chọn khoa</option>
                        <option value="computerScienceEngineering">KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH</option>
                        <option value="mechanicalEngineering">KHOA CƠ KHÍ</option>
                        <option value="chemicalEngineering">KHOA KỸ THUẬT HÓA HỌC</option>
                        <option value="geoEngineering">KHOA KỸ THUẬT ĐỊA CHẤT VÀ DẦU KHÍ</option>
                        <option value="environmentEngineering">KHOA MÔI TRƯỜNG VÀ TÀI NGUYÊN</option>
                        <option value="transportationEngineering">KHOA KỸ THUẬT GIAO THÔNG</option>
                        <option value="industrialManagementEngineering">KHOA QUẢN LÝ CÔNG NGHIỆP</option>
                        <option value="materialEngineering">KHOA CÔNG NGHỆ VẬT LIỆU</option>
                        <option value="civilEngineering">KHOA KỸ THUẬT XÂY DỰNG</option>
                        <option value="electicalEngineering">KHOA ĐIỆN - ĐIỆN TỬ</option>
                    </select>
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
