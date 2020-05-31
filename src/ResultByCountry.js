import React from 'react';
import axios from 'axios';

class ResultByCountry extends React.Component {
      constructor(porps) {
            super()
            this.state = {
                  data: []
            }
      }

      result() {
            const axios = require("axios");

            axios({
                  "method": "GET",
                  "url": "https://covid-19-data.p.rapidapi.com/report/country/all",
                  "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                        "x-rapidapi-key": "93cc938ca2mshd06030b874a1b28p12983bjsn26c8fec9fd67",
                        "useQueryString": true
                  }, "params": {
                        "date-format": "YYYY-MM-DD",
                        "format": "json",
                        "date": "2020-04-01"
                  }
            })
                  .then((response) => {
                        const mon = response.data
                        console.log(mon)
                  })
                  .catch((error) => {
                        console.log(error)
                  })
      }
      componentDidMount() {
            this.result();
      }
      render() {

            return (
                  <div>
                        <h1>BY COUNTRY </h1>
                  </div>
            )
      }
}
export default ResultByCountry;
