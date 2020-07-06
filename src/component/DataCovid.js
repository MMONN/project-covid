import React from 'react'
import axios from 'axios';
import '../css/DataCovidcss.css';
import { TeamOutlined, PlusOutlined, GlobalOutlined, UserAddOutlined, HomeOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';

function DataCovid(props) {
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
                                    <p>TOTOL CASE</p>
                              </Wrapper>
                              <div className="result">
                                    {props.data.total_cases}
                              </div>
                              <PlusOutlined />
                              <div className="update">
                                    {props.data.new_cases}
                              </div>
                        </div>
                  </div>
                  <div className="second-box">
                        <div className="box">
                              <Wrapper Active>
                                    <p>ACTIVE CASE</p>
                              </Wrapper>
                              <div className="result">
                                    {props.data.active_cases}
                              </div>
                        </div>
                        <div className="box">
                              <Wrapper Recover>
                                    <p>TOTAL RECOVER</p>
                              </Wrapper>
                              <div className="result">
                                    {props.data.total_recovered}
                              </div>
                        </div>
                        <div className="box">
                              <Wrapper Deaths>
                                    <p>TOTAL DEATHS</p>
                              </Wrapper>
                              <div className="result">
                                    {props.data.total_deaths}
                              </div>
                              <PlusOutlined />
                              <div className="update">
                                    {props.data.new_deaths}
                              </div>
                        </div>
                  </div>
            </div>
      )
}
export default DataCovid;