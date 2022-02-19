import React from "react";
import { useState } from "react";

export default function (props) {
  let apiData = props.data;
  let minYear = apiData[apiData.length - 1].year;
  let maxYear = apiData[0].year;
  console.log(minYear);
  console.log(maxYear);
  const [yearSelection, setYearSelection] = useState(new Date().getFullYear());
  const [categorySelection, setCategorySelection] = useState("All");

  return (
    <div className="Filter d-flex flex-row-reverse gap-5 justify-content-right">
      <select>
        <option value="lime">other options</option>
      </select>
      <select>
        <option value="grapefruit">{categorySelection}</option>
        <option value="lime">other options</option>
      </select>
    </div>
  );
}
