import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <span>Search: </span>
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
};
