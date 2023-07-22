import React from 'react'
import '../Components/Style/HomeAppStyle.css'
import TopBox from '../Components/TopBox'
import ChartBox from '../Components/ChartBox'
const HomeApp = () => {
  return (
    <div className='homeApp'>
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox />
      </div>
      <div className="box box3">
        <ChartBox />
      </div>
      <div className="box box4">Box 4</div>
      <div className="box box5">
        <ChartBox />
      </div>
      <div className="box box6">
        <ChartBox />
      </div>
      <div className="box box7">Box 7</div>
      <div className="box box8">Box 8</div>
      <div className="box box9">Box 9</div>
    </div>
  )
}

export default HomeApp
