import { Table, Modal } from 'antd';
import React, { useState, } from 'react';
import { useParams } from 'react-router-dom';
import Papa from 'papaparse';
import { loadLinkUrl, loadMarkApi, updateMarkApi } from '../apis/LoadMark.api';
import upLoad from '../assets/img/upload.png';

const LoadMark = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [csvFile, setCsvFile] = useState(null);
    const [linkUrl, setLinkUrl] = useState("");
    const classId = useParams().id;

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
        setCsvFile(event.target.files[0]);
        if (event.target.files[0]) {
            if (!event.target.files[0].name.endsWith('.csv') || event.target.files[0].type !== 'text/csv') {
                showError('Vui lòng chọn tệp CSV hợp lệ.');
                return;
            }
            parseCSV(event.target.files[0]);
        }
    };
    const handleLinkChange = (e) => {
        setLinkUrl(e.target.value);
    };

    const parseCSV = (file) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                validateColumns(results.data);
            },
            error: () => {
                showError('Có lỗi xảy ra khi đọc tệp CSV.');
            },
        });
    };

    const validateColumns = (parsedData) => {
        const columns = Object.keys(parsedData[0]);
        const missingColumns = requiredColumns.filter((col) => col !== 'Điểm lab' && !columns.includes(col));

        if (missingColumns.length > 0) {
            showError(`Tệp tải lên không đúng định dạng. Các cột bị thiếu: ${missingColumns.join(', ')}`);
            return;
        }

        setData(parsedData);
        setError('');
    };

    const showError = (message) => {
        setError(message);
        Modal.error({
            title: 'Lỗi',
            content: message,
        });
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

    const convert = (parsedData) => {
        return parsedData.map((record) => ({
            MSSV: record.MSSV,
            Data: {
                BT: [parseFloat(record['Điểm bài tập'])] || null,
                TN: [parseFloat(record['Điểm lab'])] || null,
                BTL: [parseFloat(record['Điểm BTL'])] || null,
                GK: parseFloat(record['Điểm thi giữa kỳ']) || null,
                CK: parseFloat(record['Điểm thi cuối kỳ']) || null,
            },
        }));
    };

    const handleUpLoad = async (event) => {
        event.preventDefault();
        if (!csvFile && linkUrl === "") {
            showError('Không có tệp để tải lên.');
            return;
        }
        if (linkUrl !== "") {
            const body = {
                link_url: linkUrl,
                class_id: classId,
            };
            try {
                const response = await loadLinkUrl(body);
                handleSuccess(response, 'Tải lên bảng điểm thành công!');
            } catch (err) {
                if (err.response.data.code === 'success') {
                    Modal.success({
                        title: 'Thành công',
                        content: 'Cập nhật bảng điểm thành công!',
                    });
                    setLinkUrl("");
                    setData([]);
                    setCsvFile(null);
                    return;
                }
                await handleUploadError(err, body);
            }
        } else {
            const file = convert(data);
            const fileMark = {
                score: file,
                class_id: classId,
            };

            try {
                const response = await loadMarkApi(fileMark);
                handleSuccess(response, 'Tải lên bảng điểm thành công!');
            } catch (err) {

                if (err.response.data.code === 'success') {
                    Modal.success({
                        title: 'Thành công',
                        content: 'Cập nhật bảng điểm thành công!',
                    });
                    setLinkUrl("");
                    setData([]);
                    setCsvFile(null);
                    return;
                }
                await handleUploadError(err, fileMark);
            }
        }
    };

    // Handle successful API responses
    const handleSuccess = (response, successMessage) => {
        if (response && response.code === 'success') {
            Modal.success({
                title: 'Thành công',
                content: successMessage,
            });
            setLinkUrl("");
            setData([]);
            setCsvFile(null);
        }
    };

    // Handle upload errors
    const handleUploadError = async (err, fileMark) => {
        if (err.response) {
            const errorMsg = err.response.data.msg;

            if (errorMsg === 'Bảng ghi của lớp học này đã được lưu trong database trước đó') {
                try {
                    const response = await updateMarkApi(fileMark, classId);
                    handleSuccess(response, 'Cập nhật bảng điểm thành công!');
                } catch (updateErr) {

                    if (updateErr.response.data.code === 'success') {
                        Modal.success({
                            title: 'Thành công',
                            content: 'Cập nhật bảng điểm thành công!',
                        });
                        setData([]);
                        setCsvFile(null);
                        return;
                    }

                    showError(updateErr.response ? updateErr.response.data.msg : 'Có lỗi xảy ra');
                }
            } else {
                showError(errorMsg);
            }
        } else {
            showError('Có lỗi xảy ra.');
        }
    };


    console.log(error); // eslint-disable-line
    console.log(linkUrl)
    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div
                className="flex h-64 w-3/5 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dotted border-gray-400 p-10"
                onClick={() => document.getElementById('fileInput').click()}
            >
                <input type="file" id="fileInput" accept=".csv" className="hidden" onChange={handleFileChange} />
                <img src={upLoad} alt="Upload" className="mb-4 size-16" />
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
                        rowKey={(record) => `${record.MSSV}-${record.STT}`}
                        pagination={true}
                    />
                </div>
            )}
            <div className='flex flex-col items-center justify-center w-2/5'>
                <label htmlFor="link_url">link url</label>
                <input
                    type="text"
                    id="link_url"
                    name='link-url'
                    className='border-[2px] w-full border-black rounded-[12px] px-[20px]'
                    placeholder='Nhập link url điểm'
                    value={linkUrl}
                    onChange={handleLinkChange}
                />
            </div>

            <br />
            <button
                type="button"
                className="mb-2 me-2 rounded-lg border border-gray-200 bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-inner hover:shadow-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-blue-950 dark:text-gray-400 dark:hover:bg-blue-900 dark:hover:text-white dark:focus:ring-gray-700"
                onClick={handleUpLoad}
            >
                Tải lên
            </button>
        </div>
    );
};

export default LoadMark;
