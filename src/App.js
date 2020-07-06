import React, { useState, useEffect } from 'react';
import './css/App.css';
import DataCovid from './component/DataCovid';

function Covid() {
  const [covid, setCovid] = useState({
    active_cases: '',
    deaths_per_1m_population: '',
    new_cases: '',
    new_deaths: '',
    serious_critical: '',
    statistic_taken_at: '',
    total_cases: '',
    total_cases_per_1m_population: '',
    total_deaths: '',
    total_recovered: '',
  })

  useEffect(() => {
    const axios = require("axios");
    axios({
      "method": "GET",
      "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "93cc938ca2mshd06030b874a1b28p12983bjsn26c8fec9fd67"
      }
    })
      .then((response) => {
        const inform = response.data;
        setCovid(inform)
        console.log(inform)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  return (
    <>
      <div className="container">
        <div className="Head">
          <h1>COVID 2019</h1>
          <p>Statistic Coronavirus around the world</p>
        </div>
        <DataCovid data={covid} />
      </div>
    </>
  )
}
export default Covid;
