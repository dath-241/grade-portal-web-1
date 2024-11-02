import { Table } from "antd";
import React, { useState } from "react";
import Papa from "papaparse";

const LoadMark = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setData(results.data);
          setError("");
        },
        error: (err) => {
          setError("Có lỗi xảy ra khi đọc tệp CSV");
        },
      });
    }
  };

  const columns =
    data.length > 0
      ? Object.keys(data[0]).map((key) => ({
          title: key,
          dataIndex: key,
          key: key,
        }))
      : [];

  const components = {
    header: {
      cell: (props) => (
        <th {...props} style={{ backgroundColor: "#112d4e", color: "white" }} />
      ),
    },
    body: {
      cell: (props) => (
        <td {...props} style={{ backgroundColor: "#dbe2ef", color: "black" }} />
      ),
    },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen">
      <div
        className="border-2 border-dotted border-gray-400 rounded-lg p-10 flex flex-col items-center justify-center w-3/5 h-64 cursor-pointer"
        onClick={() => document.getElementById("fileInput").click()}
      >
        <input
          type="file"
          id="fileInput"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/362a/6e3f/9411054ec26261167f9b946d14f39954?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VLkVaM-5xIY8a8MiRhfitKeMxKwxs0fo9Uzg7QqCL65dwXI4U5ifxL8XZ5QZ1syYcfYpqQgKIkh6DAfOJOF0n-eQx0h4enq-Ds4PKPOtxNh7gFtln2-tBoABkj2Qk1yzMRASkUu8CCHbvqgC9i0jxB3TdZ23iQtFYBibq-4YaPG8Ev1qngNtqHBiW0xlEZ3n3I929d0iN8lx5BL505l0ZSgS2dyvQEcHYYxUxCZ6ihGhvgn-EBwestOIDDkYkHgIPp6jCu53WMCoIEaDSM0pQG8FaXNUbYYzTdS35oIRKkpowgXGIKXCT~nSyly1ZtCmouHg-PFOfHaIjCoHdZKuQg__"
          alt=""
          className="size-16 mb-4"
        />
        <p className="text-gray-500 text-center">
          Nhấn vào để chọn tệp tải lên
        </p>
        <p className="text-gray-300 text-center">
          Chỉ hỗ trợ tệp CSV có định dạng chuẩn
        </p>
      </div>
      <br />
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}

      {data.length > 0 && (
        <div style={{ marginTop: "20px", width: "80%" }}>
          <h2 className="text-center text-2xl font-semibold text-blue-950 ">
            BẢNG ĐIỂM CỦA SINH VIÊN
          </h2>
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
        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-blue-950 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-900"
      >
        Tải lên
      </button>
    </div>
  );
};

export default LoadMark;
