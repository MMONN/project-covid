import React from 'react';
import axios from 'axios';
import '../css/ResultByCountrycss.css'

class ResultByCountry extends React.Component {
      constructor(porps) {
            super()
            this.state = {
                  data: [{
                        active_cases: '',
                        cases: '',
                        country_name: '',
                        deaths: '',
                        deaths_per_1m_population: '',
                        new_cases: '',
                        new_deaths: '',
                        region: '',
                        serious_critical: '',
                        tests_per_1m_population: '',
                        total_cases_per_1m_population: '',
                        total_recovered: '',
                        total_tests: '',
                  }]
            }
      }

      result() {
            const axios = require("axios");
            axios({
                  "method": "GET",
                  "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
                  "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                        "x-rapidapi-key": "93cc938ca2mshd06030b874a1b28p12983bjsn26c8fec9fd67",
                        "useQueryString": true
                  }
            })
                  .then((response) => {
                        const res = response.data.countries_stat
                        this.setState({ data: res })
                        console.log(response)
                  })
                  .catch((error) => {
                        console.log(error)
                  })
      }
      componentDidMount() {
            this.result();
      }

      render() {

            const resultBycountry = this.state.data.map((data) => {
                  return <li key={data.country_name}>
                        {data.country_name} {data.cases} {data.active_cases} {data.new_cases} {data.total_recovered}
                        {data.deaths} {data.new_deaths}</li>

            });
            console.log(resultBycountry);

            return (
                  <div className="container">
                        <h1>BY COUNTRY </h1>
                        <ul>
                              {resultBycountry}
                        </ul>

                  </div>

            )
      }
}
export default ResultByCountry;
