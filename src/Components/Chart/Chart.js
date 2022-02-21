import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Table from "./Table";
import axios from "axios";
import FilteringTable from "./FilteringTable";

export default function Chart() {
  const yearSelection = 2022;
  const category = "All";
  const [apiData, setApiData] = useState([]);

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
        console.log(newdata);
        setApiData(newdata);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Chart m-5">
      {apiData.length !== 0 ? (
        <h3>
          Showing Winners of {apiData[apiData.length - 1].year} -
          {apiData[0].year}
        </h3>
      ) : (
        <></>
      )}

      {apiData.length !== 0 ? <FilteringTable data={apiData} /> : <></>}
    </div>
  );
}
