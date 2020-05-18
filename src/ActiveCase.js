import React from 'react'
import './Totalcasecss.css'
import { UserAddOutlined } from '@ant-design/icons';

const ActiveCase = props => {
      return (
            <div className="box Active">
                  <div className="Head Active">
                        <UserAddOutlined />
                        <p>ACTIVE CASE</p>
                  </div>
                  <div className="active">
                        <p>{props.act.activecase}</p>
                  </div>
            </div>
      )
}
export default ActiveCase;