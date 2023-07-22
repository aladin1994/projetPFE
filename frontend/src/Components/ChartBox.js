import React from 'react'
import './Style/ChartBoxStyle.css'
import { Link } from 'react-router-dom'
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const ChartBox = () => {
    
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
    return (
        <div className='chartBox'>
            <div className="boxInfo">
                <div className="titleBoxInfo">
                    <img src="" alt="" />
                    <span>Total Users</span>
                </div>
                <h1>15.693</h1>
                <Link to="/">
                    View all
                </Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={data}>
                          <Tooltip/>
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#8884d8" 
                            strokeWidth={2}
                            dot ={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <div className="porcentage">45%</div>
                    <div className="duration">this month</div>
                </div>
            </div>
        </div>
    )
}

export default ChartBox
