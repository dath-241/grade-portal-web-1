import { Link } from 'react-router-dom';
import 'flowbite';
import React, { useEffect, useState, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import { DataTable } from 'simple-datatables';

import logo from '../../assets/img/hcmut.png';
import landingImg from '../../assets/img/landingPic.png';
import teachericon from '../../assets/img/teacher.png';

const Teacher = () => {
    const [teachers, setTeachers] = useState([
        {
            id: 1000,
            fname: 'A',
            lname: 'Nguyễn Văn',
            mail: 'nguyenvana1@hcmut.edu.vn',
            faculty: 'KH-KT Máy tính',
            phone: '012345678',
        },
        {
            id: 1001,
            fname: 'B',
            lname: 'Nguyễn Văn',
            mail: 'nguyenvana2@hcmut.edu.vn',
            faculty: 'KH-KT Máy tính',
            phone: '012345678',
        },
        {
            id: 1002,
            fname: 'C',
            lname: 'Nguyễn Văn',
            mail: 'nguyenvana@hcmut.edu.vn',
            faculty: 'KH-KT Máy tính',
            phone: '012345678',
        },
        {
          id: 1003,
          fname: 'D',
          lname: 'Nguyễn Văn',
          mail: 'nguyenvana@hcmut.edu.vn',
          faculty: 'KH-KT Máy tính',
          phone: '012345678',
      },
      {
          id: 1004,
          fname: 'E',
          lname: 'Nguyễn Văn',
          mail: 'nguyenvana3@hcmut.edu.vn',
          faculty: 'KH-KT Máy tính',
          phone: '012345678',
      },
      {
          id: 1005,
          fname: 'F',
          lname: 'Nguyễn Văn',
          mail: 'nguyenvana3@hcmut.edu.vn',
          faculty: 'KH-KT Máy tính',
          phone: '012345678',
      },
      {
        id: 1006,
        fname: 'G',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana2@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        phone: '012345678',
      },
      {
        id: 1007,
        fname: 'H',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana1@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        phone: '012345678',
      },
      {
        id: 1008,
        fname: 'I',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        phone: '012345678',
      },
      {
        id: 1009,
        fname: 'K',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        phone: '012345678',
    },
    {
        id: 1010,
        fname: 'L',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        phone: '012345678',
    },
    {
        id: 1011,
        fname: 'M',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        phone: '012345678',
    },
    {
      id: 1012,
      fname: 'N',
      lname: 'Nguyễn Văn',
      mail: 'nguyenvana@hcmut.edu.vn',
      faculty: 'KH-KT Máy tính',
      phone: '012345678',
    },
    {
      id: 1013,
      fname: 'R',
      lname: 'Nguyễn Văn',
      mail: 'nguyenvana@hcmut.edu.vn',
      faculty: 'KH-KT Máy tính',
      phone: '012345678',
    },
    {
      id: 1014,
      fname: 'S',
      lname: 'Nguyễn Văn',
      mail: 'nguyenvana@hcmut.edu.vn',
      faculty: 'KH-KT Máy tính',
      phone: '012345678',
    },
    ]);

    //Search-logic
    const tableRef = useRef(null);
    const [filteredTeachers, setFilteredTeachers] = useState(teachers);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      setSearchTerm(query);

      const filtered = teachers.filter(teacher =>
        teacher.id.toString().includes(query) ||
        teacher.fname.toLowerCase().includes(query) ||
        teacher.lname.toLowerCase().includes(query) ||
        teacher.mail.toLowerCase().includes(query) ||
        teacher.faculty.toLowerCase().includes(query) ||
        teacher.phone.toLowerCase().includes(query)
      );
      // const finalList = sortOrder === 'default' ? filtered : handleSort(filtered);
      setFilteredTeachers(filtered);
    };

    useEffect(() => {
      if (tableRef.current) {
        const dataTable = new DataTable(tableRef.current, {
          searchable: true,
          sortable: false,
        });
      }
    }, [filteredTeachers]);

    //Sort
    const [initialTeachers, setInitialTeachers] = useState(teachers);
    const [sortOrder, setSortOrder] = useState('default');

    const handleSort = (teachersList) => {
      const sortedTeachers = [...teachersList];
      if (sortOrder === 'down') {
        sortedTeachers.sort((a, b) => a.fname.localeCompare(b.fname));
        setSortOrder('up');
      } else if (sortOrder === 'up') {
        sortedTeachers.sort((a, b) => b.fname.localeCompare(a.fname));
        setSortOrder('default');
      } else {
        setSortOrder('down');
      }
      return sortedTeachers;
    };
    
    const handleSortChange = () => {
      const sortedTeachers = handleSort(filteredTeachers);
      setFilteredTeachers(sortedTeachers);
    };

    useEffect(() => {
      if (searchTerm === '') {
        setFilteredTeachers(teachers);
        setSortOrder('default'); 
      }
    }, [searchTerm]);

    // Pagination-logic
    const [currentPage, setCurrentPage] = useState(0);
    const teachersPerPage = 10;  
    const offset = currentPage * teachersPerPage;

    const currentTeachers = teachers.slice(offset, offset + teachersPerPage);
    const pageCount = Math.ceil(teachers.length / teachersPerPage);

    const handlePageClick = (event) => {
      setCurrentPage(event.selected);
    };

    return (
        <div className="container mx-auto p-4">
          <div>
            <div>
              <img src={teachericon} alt="Icon" className="size-[145px]"/>
            </div>
            {/* Breadcums */}
            <nav class="flex" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                  <a href="#" class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600 ">
                    <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      {/* <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/> */}
                    </svg>
                    Bảng điều khiển
                  </a>
                </li>
                <li aria-current="page">
                  <div class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="ms-1 text-sm font-medium text-gray-700 md:ms-2 ">Giảng viên</span>
                  </div>
                </li>
              </ol>
            </nav>
          
            <h1 className="mb-4 text-2xl font-bold">Giảng viên</h1>
            <button type="button" className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
              <i class="fa-solid fa-plus mr-2" style={{color: '#30d70f'}}></i>
              Thêm GV
            </button>
          </div>

          <div>
            {/* Search bar */}
            <div className="container mx-auto flex justify-start">
              <form className="max-w-md mx-auto ml-2">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-gray-700">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                      <button type="button" class="focus:outline-none" cursor-pointer text-gray-300> 
                        <i class="fa-solid fa-magnifying-glass text-gray-300 hover:text-gray-500"></i>
                      </button>
                    </div>
                    <input 
                      type="search" 
                      id="default-search"
                      value={searchTerm}
                      onChange={handleSearch}
                      className="block w-[350px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-white rounded-full focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Tìm kiếm..." required 
                    />
                </div>
              </form>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <i className="fa-solid fa-filter text-gray-700"></i>
              <span className="text-gray-700">Filter by:</span>
              {/* Filter by Khoa */}
              <div>
                <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                  Khoa
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div id="dropdownRadio" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow" style={{ position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate3d(522.5px, 3847.5px, 0px)' }}>
                  <ul className="p-3 space-y-1 text-sm text-gray-700" aria-labelledby="dropdownRadioButton">
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100">
                        <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                        <label htmlFor="filter-radio-example-3" className="w-full ms-2 text-sm font-medium text-gray-900 rounded">KH-KT Máy tính</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              
          </div>

          {/* table */}
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
              <table class="w-full text-left text-sm text-white rtl:text-right">
                  <thead class="bg-[rgb(17,45,78)] text-xs uppercase text-white">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              Mã số
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Tên
                              <button onClick={handleSortChange}>
                                <i className="fa-solid fa-sort white ml-4"></i>
                              </button>
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Họ, Tên Đệm
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Email
                          </th>
                          <th scope="col" class="px-6 py-3">
                              SĐT
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Khoa
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                  {filteredTeachers.length > 0 ? (
                    filteredTeachers.map(teacher => (
                          <tr key={teacher.id} class="border-b bg-white dark:border-gray-300 ">
                              <td
                                  scope="row"
                                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                              >
                                  {teacher.id}
                              </td>
                              <td
                                  scope="row"
                                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                              >
                                  {teacher.fname}
                              </td>
                              <td
                                  scope="row"
                                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                              >
                                  {teacher.lname}
                              </td>
                              <td
                                  scope="row"
                                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                              >
                                  {teacher.mail}
                              </td>
                              <td
                                  scope="row"
                                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                              >
                                  {teacher.phone}
                              </td>
                              <td
                                  scope="row"
                                  class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                              >
                                  {teacher.faculty}
                              </td>
                          </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-4">Không tìm thấy kết quả nào.</td>
                    </tr>
                  )}
                  </tbody>
              </table>
          </div>
    
          <div className="mt-4">
          {/* Pagination */}
            <ReactPaginate
              breakLabel="..."
              nextLabel={<span className="flex items-center"><span className="sr-only">Next</span><svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg></span>}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={<span className="flex items-center"><span className="sr-only">Previous</span><svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg></span>}
              renderOnZeroPageCount={null}
              containerClassName="flex justify-center items-center -space-x-px h-8 text-sm"
              pageClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700"
              activeClassName="z-10 flex items-center justify-center px-3 h-8 text-blue-600 border border-blue-300 bg-blue-50"
              previousClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg"
              nextClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg"
            />
          </div>
            
        </div>
    );
};

export default Teacher;
