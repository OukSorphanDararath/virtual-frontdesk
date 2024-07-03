import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useTable } from "react-table";
import { FiSearch } from "react-icons/fi";

const apiBaseUrl = process.env.REACT_APP_API_KEY;

const ShiftPage = ({ match }) => {
  const [scheduleData, setScheduleData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { params } = match;
  const shift = params.shift;
  const inputRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/schedules/${shift}`)
      .then((response) => {
        setScheduleData(response?.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [shift]);

  useEffect(() => {
    if (scheduleData) {
      const filtered = scheduleData?.schedules?.filter((item) =>
        item.Subject.toLowerCase().includes(inputValue.toLowerCase())
      );
      if (inputValue.length === 0) {
        setFilteredData(scheduleData?.schedules);
      } else {
        setFilteredData(filtered);
      }
    }
  }, [inputValue]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Subject",
        accessor: "Subject",
      },
      {
        Header: "Day",
        accessor: "Day",
      },
      {
        Header: "Time",
        accessor: "Time",
      },
      {
        Header: "Room",
        accessor: "Room",
      },
      {
        Header: "Campus",
        accessor: "Campus",
      },
      {
        Header: "Instructor",
        accessor: "Instructor",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: filteredData ? filteredData : scheduleData?.schedules || [],
    });

  return (
    <div className="h-full w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold my-8">{scheduleData?.name}</h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-6 pointer-events-none">
            <FiSearch className="w-6 h-6 text-gray-200" />
          </div>
          <input
            ref={inputRef}
            type="search"
            id="default-search"
            className="block w-96 focus:outline-none py-3 pl-16 pr-6 text-lg shadow-inner rounded-full bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />{" "}
        </div>
      </div>
      <div className="w-full h-[28rem] rounded-xl overflow-hidden shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border text-gray-200 border-gray-500 p-4">
        {/* Wrapper for both header and body to ensure alignment */}
        <div className="w-full">
          {/* Header table */}
          <table {...getTableProps()} className="table-auto w-full">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="p-2 pb-6 font-semibold text-left"
                      style={{ width: column.width }}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          </table>
        </div>

        {/* Scrollable body container */}
        <div className="overflow-auto h-[90%]">
          <table {...getTableProps()} className="table-auto w-full">
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="p-2 border-b border-gray-500"
                        style={{ width: cell.column.width }}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShiftPage;
