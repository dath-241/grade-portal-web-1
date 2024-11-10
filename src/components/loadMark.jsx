import { Table, Modal } from 'antd';
import React, { useState } from 'react';
import Papa from 'papaparse';

const LoadMark = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const requiredColumns = [
        'STT',
        'MSSV',
        'Họ và tên',
        'Nhóm lớp',
        'Điểm bài tập',
        'Điểm lab',
        'Điểm BTL',
        'Điểm thi giữa kỳ',
        'Điểm thi cuối kỳ',
    ];

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        console.log(error); // eslint-disable-line no-console
        

        if (file) {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    const columns = Object.keys(results.data[0]);
                    const missingColumns = requiredColumns.filter(
                        (col) => col !== 'Điểm lab' && !columns.includes(col),
                    );

                    if (missingColumns.length > 0) {
                        setError('Các cột bị thiếu: ' + missingColumns.join(', '));
                        Modal.error({
                            title: 'Lỗi',
                            content: `Tệp tải lên không đúng định dạng. Các cột bị thiếu: ${missingColumns.join(', ')}`,
                        });
                        return;
                    }

                    setData(results.data);
                    setError('');
                },
                error: (err) => {
                    setError('Có lỗi xảy ra khi đọc tệp CSV');
                    Modal.error({
                        title: 'Lỗi',
                        content: 'Có lỗi xảy ra khi đọc tệp CSV.',
                    });
                },
            });
        }
    };

    const hasLabScores = data.some((record) => record['Điểm lab'] !== undefined && record['Điểm lab'] !== '');

    const columns = requiredColumns
        .map((key) => {
            if (key === 'Điểm lab' && !hasLabScores) {
                return null;
            }
            return {
                title: key,
                dataIndex: key,
                key: key,
            };
        })
        .filter(Boolean);

    const components = {
        header: {
            cell: (props) => (
                <th {...props} style={{ backgroundColor: '#112d4e', color: 'white', textAlign: 'center' }} />
            ),
        },
        body: {
            cell: (props) => (
                <td {...props} style={{ backgroundColor: '#dbe2ef', color: 'black', textAlign: 'center' }} />
            ),
        },
    };

    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div
                className="flex h-64 w-3/5 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dotted border-gray-400 p-10"
                onClick={() => document.getElementById('fileInput').click()}
            >
                <input type="file" id="fileInput" accept=".csv" className="hidden" onChange={handleFileChange} />
                <img
                    src="https://s3-alpha-sig.figma.com/img/362a/6e3f/9411054ec26261167f9b946d14f39954?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VLkVaM-5xIY8a8MiRhfitKeMxKwxs0fo9Uzg7QqCL65dwXI4U5ifxL8XZ5QZ1syYcfYpqQgKIkh6DAfOJOF0n-eQx0h4enq-Ds4PKPOtxNh7gFtln2-tBoABkj2Qk1yzMRASkUu8CCHbvqgC9i0jxB3TdZ23iQtFYBibq-4YaPG8Ev1qngNtqHBiW0xlEZ3n3I929d0iN8lx5BL505l0ZSgS2dyvQEcHYYxUxCZ6ihGhvgn-EBwestOIDDkYkHgIPp6jCu53WMCoIEaDSM0pQG8FaXNUbYYzTdS35oIRKkpowgXGIKXCT~nSyly1ZtCmouHg-PFOfHaIjCoHdZKuQg__"
                    alt="Upload"
                    className="mb-4 size-16"
                />
                <p className="text-gray-600">Nhấp để tải lên tệp CSV</p>
            </div>
            {data.length > 0 && (
                <div style={{ marginTop: '20px', width: '80%' }}>
                    <h2 className="text-center text-2xl font-semibold text-blue-950">BẢNG ĐIỂM CỦA SINH VIÊN</h2>
                    <br />
                    <Table
                        components={components}
                        dataSource={data}
                        columns={columns}
                        rowKey={(record, index) => index}
                        pagination={false}
                    />
                </div>
            )}
            <br />
            <button
                type="button"
                className="mb-2 me-2 rounded-lg border border-gray-200 bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-inner hover:shadow-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-blue-950 dark:text-gray-400 dark:hover:bg-blue-900 dark:hover:text-white dark:focus:ring-gray-700"
            >
                Tải lên
            </button>
        </div>
    );
};

export default LoadMark;
