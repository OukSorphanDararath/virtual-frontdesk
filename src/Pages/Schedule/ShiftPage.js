import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBoxSchedule from "../../components/SearchBoxSchedule";
import { useTable } from "react-table";

const apiBaseUrl = process.env.REACT_APP_API_KEY;

const ShiftPage = ({ match }) => {
  const [scheduleData, setScheduleData] = useState();
  const { params } = match;
  const shift = params.shift;

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
    useTable({ columns, data: scheduleData?.schedules || [] });

  return (
    <div className="h-full w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold my-8">{scheduleData?.name}</h1>
        <SearchBoxSchedule />
      </div>
      <div className="w-full h-[28rem] rounded-xl overflow-auto shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border text-gray-200 border-gray-500 p-4">
        <table {...getTableProps()} className="table-auto w-full">
          <thead className="sticky top-0  z-10">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="p-2 pb-6 font-semibold text-left"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="p-2 border-b border-gray-500"
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
  );
};

export default ShiftPage;
