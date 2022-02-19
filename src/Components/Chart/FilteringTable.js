import React from "react";
import { useTable, useGlobalFilter } from "react-table";
import { GlobalFilter } from "./GlobalFilter";

export default function FilteringTable(props) {
  const data = React.useMemo(() => props.data, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "name",
        accessor: "name",
      },
      {
        Header: "motivation",
        accessor: "motivation",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useGlobalFilter);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
