import React from 'react'
import {HomeOutlined} from '@ant-design/icons';
const RecoverCase = props => {
      return (
            <div className="box Recover">
                  <div className="Head Recover">
                        <HomeOutlined />
                        <p>RECOVER CASE</p>
                  </div>
                  <div className="recover">
                        <p>{props.reco.recovercase}</p>
                  </div>

            </div>
      )
}

export default RecoverCase;