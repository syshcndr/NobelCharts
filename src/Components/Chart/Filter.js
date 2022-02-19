import React from "react";
import { useState } from "react";

export default function (props) {
  let apiData = props.data;

  const [yearSelection, setYearSelection] = useState(new Date().getFullYear());
  const [categorySelection, setCategorySelection] = useState("All");

  let years = [];
  for (let data of apiData) {
    if (!years.includes(data.year)) {
      years.push(data.year);
    }
  }
  const yearList = years.map((years) => (
    <option type="submit" value={years}>
      {years}
    </option>
  ));

  let categories = [];
  for (let data of apiData) {
    if (!categories.includes(data.category)) {
      categories.push(data.category);
    }
  }
  const categoryList = categories.map((categories) => (
    <option type="submit" value={categories}>
      {categories}
    </option>
  ));

  return (
    <div className="Filter d-flex flex-row-reverse gap-5 justify-content-right">
      <select>{yearList}</select>
      <select>{categoryList}</select>
    </div>
  );
}
