import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { fetchAllStudentApi } from '../../apis/students';
import StudentIcon from '../../assets/img/student.png';
import { Link } from 'react-router-dom';

function StudentList() {
    const [pageSize, setPageSize] = useState(10);
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleGetStudents = async () => {
        const lecturerData = await fetchAllStudentApi();
        const formattedData = lecturerData.map((student) => ({
            key: student.ID, // Mỗi hàng cần `key` duy nhất
            id: student.ID,
            ms: student.Ms,
            name: student.Name,
            email: student.Email,
            faculty: student.Faculty,
            surName: student.Name.split(' ')[0], // Lấy họ (hoặc điều chỉnh logic phù hợp)
        }));
        setStudents(formattedData);
        setFilteredStudents(formattedData);
    };
    
    useEffect(() => {
        handleGetStudents();
    }, []);  

    const handleSearchStudents = (searchValue) => {
        if (!searchValue) {
            return students.slice(0, pageSize);
        }

        return students
            .filter(
                (students) =>
                    students.ms.toString().toLowerCase().includes(searchValue) ||
                    students.name.toLowerCase().includes(searchValue) ||
                    students.surName.toLowerCase().includes(searchValue) ||
                    students.email.toLowerCase().includes(searchValue) ||
                    students.faculty.toLowerCase().includes(searchValue),
            )
            .slice(0, pageSize);
    };    

    const handleSearch = (e) => {
        const value = e.target?.value;
        setSearchTerm(value);
        if (!value) {
            setFilteredStudents(students);
        } else {
            setFilteredStudents(handleSearchStudents(value));
        }
    };

    const handleFilterStudents = (faculty, source = students) => {
        if (!faculty) {
            handleGetStudents();
        }

        if (facultyMapping[faculty]) {
            const filtered = source.filter((student) => {
                const normalizedStudentFaculty = student.faculty?.toLowerCase() || '';
                return facultyMapping[faculty].some((facultyCode) =>
                    normalizedStudentFaculty.includes(facultyCode.toLowerCase())
                );
            });
            return filtered;
        }
    }; 

    const handleFilter = (faculty) => {
        setFilteredStudents(handleFilterStudents(faculty)); // Cập nhật lại danh sách giảng viên
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
        setStudents(handleSearchStudents());
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
                    <i className="fa-solid fa-magnifying-glass mr-2 text-gray-400"></i>
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm" 
                        className="outline-none"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

                <div className="flex items-center rounded-full bg-white px-4 py-2 shadow">
                    {/* <i className="fa-solid fa-filter"></i>
                    <div className="ml-4 flex items-center gap-2">
                        <span>Khoa</span>
                        <i className="fa-solid fa-angle-down mt-1"></i>
                    </div> */}
                    <select
                        id="department"
                        value={formData.department}
                        onChange={handleInputChange}
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
