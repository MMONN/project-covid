import React from 'react'
import axios from 'axios';
import './DataCovidcss.css';
import { TeamOutlined, PlusOutlined, GlobalOutlined, UserAddOutlined, HomeOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';

class DataCovid extends React.Component {
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
      }

      render() {

            const title = { total: 'TOTLE CASE', active: 'ACTIVE CASE', recover: 'TOTLE RECOVER', datehs: 'TOTLE DEATHS' }
            const total = {
                  totalcase: this.state.covid.total_cases, activecase: this.state.covid.active_cases, recovercase: this.state.covid.total_recovered
                  , totaldeaths: this.state.covid.total_deaths
            }
            const update = { newCase: this.state.covid.new_cases, newdeaths: this.state.covid.new_deaths }

            const Wrapper = styled.div`
                  width: 100%;
                  height: 25%;
                  background-color: #2874A6;
                  border-radius: 8px ;
                  text-align: center;
                  color: #fff;
                  font-size: 1.5rem;
                  font-weight: 500;
                  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  
                  display: flex;  
                  justify-content: center;
                  align-items: center;
                  margin: 0;
                  text-align: center;
                  font-family: 'Kanit', sans-serif;

                  ${props => props.Active && css`
                  background: #58D68D;
                  `}
                  ${props => props.Recover && css`
                  background: #F4D03F;
                  `}
                  ${props => props.Deaths && css`
                  background: #EC7063
                `}`;


            return (
                  <div className="box-container">
                        <div className="first-box">
                              <div className="box">
                                    <Wrapper>
                                          {/* <TeamOutlined /> */}
                                          <i class="fas fa-hospital-user"></i>
                                          <Title mes={title.total} />
                                    </Wrapper>
                                    <Result result={total.totalcase} />
                                    <PlusOutlined />
                                    <Update update={update.newCase} />
                              </div>
                        </div>

                        <div className="second-box">
                              <div className="box">
                                    <Wrapper Active>
                                          {/* <UserAddOutlined /> */}
                                          <Title mes={title.active} />
                                    </Wrapper>
                                    <Result result={total.activecase} />
                              </div>
                              <div className="box">
                                    <Wrapper Recover>
                                          {/* <HomeOutlined /> */}
                                          <Title mes={title.recover} />
                                    </Wrapper>
                                    <Result result={total.recovercase} />
                              </div>
                              <div className="box">
                                    <Wrapper Deaths>
                                          {/* <HomeOutlined /> */}
                                          <Title mes={title.datehs} />
                                    </Wrapper>
                                    <Result result={total.totaldeaths} />
                                    <PlusOutlined />
                                    <Update update={update.newdeaths} />
                              </div>
                        </div>
                  </div>
            )
      }
}

const Title = (props) => {
      return (
            <div>
                  <div className="Title">
                        {props.mes}
                  </div>
            </div>

      )
}

const Result = (props) => {
      return (
            <div className="result">
                  {props.result}
            </div>
      )
}

const Update = (props) => {
      return (
            <div className="update">
                  {props.update}
            </div>
      )
}

export default DataCovid;