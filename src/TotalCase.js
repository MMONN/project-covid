import React from 'react'
import './Totalcasecss.css'

const TotalCase = props => {
      return (
            <div className="box">
                  <p className="Headname">TOTAL CASE</p>
                  <p>{props.mes.totalcase}</p>
                  <p>{props.mes.newCase}</p>
            </div>
      )
}
export default TotalCase;

