import React from 'react';
import './App.css'
import logo from './logo.svg';
import axios from 'axios';
import TotalCase from './TotalCase';
import ActiveCase from './ActiveCase';
import DeathsCase from './DeathsCase';
import RecoverCase from './RecoverCase';

let contact = 'MMONN'
class Covid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      covid: {
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
      }
    }
  }
  CovidInformation() {
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
        this.setState({ covid: inform })
        console.log(inform)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  componentDidMount() {
    this.CovidInformation();
    this.interval = setInterval(() => this.CovidInformation(), 1000 * 60 * 60 * 24)
  }

  render() {


    let total = { totalcase: this.state.covid.total_cases, newCase: this.state.covid.new_cases }
    let active = { activecase: this.state.covid.active_cases }
    let recover = { recovercase: this.state.covid.total_recovered }
    let deaths = { totaldeaths: this.state.covid.total_deaths, newdeaths: this.state.covid.new_deaths }
    let date = Date(Date.now());
    let newDate = date.toString();

    return (
      <div className="container">
        <div className="Head">
          <h1>COVID 2019</h1>
          <p>Statistic Coronavirus around the world</p>
          <p className="date">The current date is: {newDate} </p>
        </div>
        <TotalCase mes={total} />
        <div className="infomation">
          <ActiveCase act={active} />
          <RecoverCase reco={recover} />
          <DeathsCase death={deaths} />
        </div>
      </div>
    )
  }
}

export default Covid;
