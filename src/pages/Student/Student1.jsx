import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import logo from '../../assets/img/hcmut.png';
import landingImg from '../../assets/img/landingPic.png';

const Student = () => {
    const [students, setStudents] = useState([
        {
            id: 1000,
            fname: 'A',
            lname: 'Nguyễn Văn',
            mail: 'nguyenvana@hcmut.edu.vn',
            faculty: 'KH-KT Máy tính',
            course: 'CNPM',
            teacher: 'LDT',
        },
        {
            id: 1001,
            fname: 'A',
            lname: 'Nguyễn Văn',
            mail: 'nguyenvana@hcmut.edu.vn',
            faculty: 'KH-KT Máy tính',
            course: 'CNPM',
            teacher: 'LDT',
        },
        {
            id: 1002,
            fname: 'A',
            lname: 'Nguyễn Văn',
            mail: 'nguyenvana@hcmut.edu.vn',
            faculty: 'KH-KT Máy tính',
            course: 'CNPM',
            teacher: 'LDT',
        },
        {
          id: 1000,
          fname: 'A',
          lname: 'Nguyễn Văn',
          mail: 'nguyenvana@hcmut.edu.vn',
          faculty: 'KH-KT Máy tính',
          course: 'CNPM',
          teacher: 'LDT',
      },
      {
          id: 1001,
          fname: 'A',
          lname: 'Nguyễn Văn',
          mail: 'nguyenvana@hcmut.edu.vn',
          faculty: 'KH-KT Máy tính',
          course: 'CNPM',
          teacher: 'LDT',
      },
      {
          id: 1002,
          fname: 'A',
          lname: 'Nguyễn Văn',
          mail: 'nguyenvana@hcmut.edu.vn',
          faculty: 'KH-KT Máy tính',
          course: 'CNPM',
          teacher: 'LDT',
      },
      {
        id: 1000,
        fname: 'A',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        course: 'CNPM',
        teacher: 'LDT',
      },
      {
        id: 1001,
        fname: 'A',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        course: 'CNPM',
        teacher: 'LDT',
      },
      {
        id: 1002,
        fname: 'A',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        course: 'CNPM',
        teacher: 'LDT',
      },
      {
        id: 1000,
        fname: 'A',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        course: 'CNPM',
        teacher: 'LDT',
    },
    {
        id: 1001,
        fname: 'A',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        course: 'CNPM',
        teacher: 'LDT',
    },
    {
        id: 1002,
        fname: 'A',
        lname: 'Nguyễn Văn',
        mail: 'nguyenvana@hcmut.edu.vn',
        faculty: 'KH-KT Máy tính',
        course: 'CNPM',
        teacher: 'LDT',
    },
    {
      id: 1000,
      fname: 'A',
      lname: 'Nguyễn Văn',
      mail: 'nguyenvana@hcmut.edu.vn',
      faculty: 'KH-KT Máy tính',
      course: 'CNPM',
      teacher: 'LDT',
    },
    {
      id: 1001,
      fname: 'A',
      lname: 'Nguyễn Văn',
      mail: 'nguyenvana@hcmut.edu.vn',
      faculty: 'KH-KT Máy tính',
      course: 'CNPM',
      teacher: 'LDT',
    },
    {
      id: 1002,
      fname: 'A',
      lname: 'Nguyễn Văn',
      mail: 'nguyenvana@hcmut.edu.vn',
      faculty: 'KH-KT Máy tính',
      course: 'CNPM',
      teacher: 'LDT',
    },
    ]);

    const [currentPage, setCurrentPage] = useState(0);
    const studentsPerPage = 10;  // số lượng sinh viên mỗi trang
    const offset = currentPage * studentsPerPage;

    // Danh sách sinh viên hiện tại dựa trên trang hiện tại
    const currentStudents = students.slice(offset, offset + studentsPerPage);

    // Tổng số trang
    const pageCount = Math.ceil(students.length / studentsPerPage);

    const handlePageClick = (event) => {
      setCurrentPage(event.selected);
    };


    return (
        <div className="container mx-auto p-4">
          <div>
            {/* Breadcums */}
            <nav class="flex" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                  <a href="#" class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600 ">
                    <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    Trang chủ
                  </a>
                </li>
                <li aria-current="page">
                  <div class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="ms-1 text-sm font-medium text-gray-700 md:ms-2 ">Sinh viên</span>
                  </div>
                </li>
              </ol>
            </nav>
          
            <h1 className="mb-4 text-2xl font-bold">Sinh viên</h1>
          </div>
            {/* Search bar */}
            <form className="max-w-md mx-auto">   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-gray-700">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <button type="button" class="focus:outline-none" cursor-pointer> 
                      <i class="fa-solid fa-magnifying-glass text-gray-300"></i>
                    </button>
                  </div>
                  <input 
                    type="search" 
                    id="default-search"
                    // onChange={this.handleSearchChange}
                    className="block w-[350px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-white rounded-full focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Tìm kiếm..." required 
                  />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> 
              </div>
            </form>

            

            
            {/* table */}
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-left text-sm text-white rtl:text-right">
                    <thead class="bg-[rgb(17,45,78)] text-xs uppercase text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Mã số
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Tên
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Họ, Tên Đệm
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Khoa
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Khoá học
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Giảng viên
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((students) => (
                            <tr class="border-b bg-white dark:border-gray-300 ">
                                <td
                                    scope="row"
                                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                                >
                                    {students.id}
                                </td>
                                <td
                                    scope="row"
                                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                                >
                                    {students.fname}
                                </td>
                                <td
                                    scope="row"
                                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                                >
                                    {students.lname}
                                </td>
                                <td
                                    scope="row"
                                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                                >
                                    {students.mail}
                                </td>
                                <td
                                    scope="row"
                                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                                >
                                    {students.faculty}
                                </td>
                                <td
                                    scope="row"
                                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                                >
                                    {students.course}
                                </td>
                                <td
                                    scope="row"
                                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                                >
                                    {students.teacher}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Pagination */}
            <ReactPaginate
              breakLabel="..."
              nextLabel={<span className="flex items-center"><span className="sr-only">Next</span><svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg></span>}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={<span className="flex items-center"><span className="sr-only">Previous</span><svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg></span>}
              renderOnZeroPageCount={null}
              containerClassName="flex items-center -space-x-px h-8 text-sm"
              pageClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700"
              activeClassName="z-10 flex items-center justify-center px-3 h-8 text-blue-600 border border-blue-300 bg-blue-50"
              previousClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg"
              nextClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg"
            />
            
        </div>
    );
};

export default Student;
