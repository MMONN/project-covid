import React from 'react'
import { HomeOutlined,PlusOutlined } from '@ant-design/icons';
const DeathsCase = props => {
      return (
            <div className="box Deaths">
                  <div className="Head Deaths">
                        <HomeOutlined />
                        <p>TOTAL DEATHS</p>
                  </div>
                  <div className="totaldeaths">
                        <p>{props.death.totaldeaths}</p>
                  </div>
                  <div className="newdeaths">
                        <PlusOutlined />
                        <p>{props.death.newdeaths}</p>
                  </div>

            </div>
      )
}
export default DeathsCase;