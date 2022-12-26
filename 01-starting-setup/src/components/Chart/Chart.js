import React from 'react'
import './Chart.css'
import { ChartBar } from './ChartBar'


export const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValues)
  return (
    <div className='chart'>
        {props.dataPoints.map( dataPoints => <ChartBar 
        key = {dataPoints.lable}
        value={dataPoints.value }
        maxValue={totalMaximum}
        lable={dataPoints.lable}
        /> )}
     
    </div>
  )
}
