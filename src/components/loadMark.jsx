import { Table, Modal } from 'antd';
import React, {  useState, use } from 'react';
import { useParams } from 'react-router-dom';
import Papa from 'papaparse';
import { loadMarkApi } from '../apis/LoadMark.api';
import upLoad from '../assets/img/upload.png';

const LoadMark = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [csvFile, setCsvFile] = useState(null); 
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
        const missingColumns = requiredColumns.filter(
            (col) => col !== 'Điểm lab' && !columns.includes(col),
        );

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
        console.log('parsedData:', parsedData);
        return parsedData.map(record => ({
            MSSV: record.MSSV,
            Data: {
                BT: [record['Điểm bài tập']] || null, 
                TB: [record['Điểm lab']] || null, 
                BTL: [record['Điểm BTL']] || null, 
                GK: record['Điểm thi giữa kỳ'] || null, 
                CK: record['Điểm thi cuối kỳ'] || null, 
            }
        }));
    };

    const handleUpLoad = async (event) => {
        event.preventDefault();
        if (!csvFile) {
            showError('Không có tệp để tải lên.');
            return;
        }
    
        try {
            const file = convert(data); 
            const fileMark = {
                score: file,
                class_id: classId,
            }
            
            const response = await loadMarkApi(fileMark); 
            console.log(response.data);
    
            if (response && response.status === 200) {
                Modal.success({
                    title: 'Thành công',
                    content: 'Tải lên bảng điểm thành công!',
                });
                
                setData([]);
                setCsvFile(null); }
            
        } catch (err) {
            console.error('Error uploading file', err.response ? err.response.data : err);
            showError('Có lỗi xảy ra khi tải lên bảng điểm.');
        }
    };

    

    console.log(error); // eslint-disable-line
    
    return (
        <div className="flex  flex-col items-center justify-center bg-white">
            <div
                className="flex h-64 w-3/5 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dotted border-gray-400 p-10"
                onClick={() => document.getElementById('fileInput').click()}
            >
                <input type="file" id="fileInput" accept=".csv" className="hidden" onChange={handleFileChange} />
                <img src={upLoad} alt="Upload" className="mb-4 size-16" />
                <p className="text-gray-600">Nhấp để tải lên tệp CSV</p>
            </div>
            {data.length > 0 && (
                <div style={{ marginTop: '20px', width: '80%'  }} >
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