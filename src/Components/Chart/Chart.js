import React, { useState } from "react";
import Filter from "./Filter";
import Table from "./Table";
import axios from "axios";
import { useEffect } from "react";
import FilteringTable from "./FilteringTable";
export default function Chart() {
  const yearSelection = 2022;
  const category = "All";
  const [apiData, setApiData] = useState([]);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    axios
      .get("https://api.nobelprize.org/v1/prize.json")
      .then((res) => {
        let data = res.data.prizes;

        let newdata = [];

        for (let prize of data) {
          if (prize["laureates"] != undefined) {
            for (let laureate of prize.laureates) {
              let single = { year: prize.year, category: prize.category };
              single.name = laureate.firstname + " " + laureate.surname;
              single.motivation = laureate.motivation;
              newdata.push(single);
            }
          }
        }

        setApiData(newdata);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="Chart m-5">
      <h3>
        Showing Winners Of Year <i>{new Date().getFullYear()}</i> Of Category{" "}
        <i>{category}</i>
      </h3>

      {apiData.length !== 0 ? <Filter data={apiData} /> : <></>}
      {apiData.length !== 0 ? <FilteringTable data={apiData} /> : <></>}
    </div>
  );
}
