import React from 'react'
import './Totalcasecss.css'
import { TeamOutlined, PlusOutlined, GlobalOutlined } from '@ant-design/icons';

const TotalCase = props => {
      return (
            <div className="box">
                  <div className="Headname">
                        <TeamOutlined />
                        <p >TOTAL CASE</p>
                  </div>
                  <div className="totalcase">
                        <p>{props.mes.totalcase}</p>
                  </div>
                  <div className="newcase">
                        <PlusOutlined />
                        <p className="newcase">{props.mes.newCase}</p>
                  </div>
                  <GlobalOutlined />

            </div>
      )
}
export default TotalCase;

