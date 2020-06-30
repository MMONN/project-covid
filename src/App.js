import React from 'react';
import './css/App.css';
import DataCovid from './component/DataCovid';
// import ResultByCountry from './ResultByCountry';

class Covid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.CovidInformation(), 1000 * 60 * 60 * 24)
  }



  render() {
    let date = Date(Date.now());
    let newDate = date.toString();

    return (
      <div className="container">
        <div className="Head">
          <h1>COVID 2019</h1>
          <p>Statistic Coronavirus around the world</p>
          <p className="date">The current date is: {newDate} </p>
        </div>
        <DataCovid />
        {/* <ResultByCountry/> */}
      </div>
    )
  }
}

export default Covid;
