import React from "react";
import { useTable, useFilters } from "react-table";
import { ColumnFilter } from "./ColumnFilter";
import { GlobalFilter } from "./GlobalFilter";

export default function FilteringTable(props) {
  const data = React.useMemo(() => props.data, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "name",
        accessor: "name",
        Filter: ColumnFilter,
      },
      {
        Header: "motivation",
        accessor: "motivation",
        Filter: ColumnFilter,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useFilters);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = tableInstance;

  return (
    <>
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr scope="row" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th scope="row" {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
