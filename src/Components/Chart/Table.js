import React from "react";
import { useTable } from "react-table";

export default function Table(props) {
  const data = props.data;

  const columns = [
    {
      Header: "name",
      accessor: "name",
    },
    {
      Header: "motivation",
      accessor: "motivation",
    },
  ];

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table className="table" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr scope="row" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th scope="row" {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
