/* eslint-disable react/no-unknown-property */
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const LineCharts = props => {
  const {data} = props
  console.log(data)

  const DataFormatter = number => {
    if (number > 1000000) {
      return `${Math.floor(number / 1000000)}L`
    }
    if (number > 1000) {
      return `${Math.floor(number / 1000)}K`
    }
    return number.toString()
  }

  const CustomTooltip = ({active, payload, label}) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <p className="label">{`${payload[0].value}`}</p>
        </div>
      )
    }

    return null
  }

  const ticks = [
    data[3].date,
    data[Math.floor(data.length / 2)].date,
    data[data.length - 5].date,
  ]

  return (
    <div testid="lineChartsContainer">
      <h1 className="line-chart-heading">Daily Spread Trends</h1>
      <div className="line-chart-card line-chart-card1">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data} margin={{top: 5, right: 20, bottom: 5}}>
            <XAxis
              dataKey="date"
              tick={{fill: 'rgba(255, 7, 58, 1)', fontSize: '12px'}}
              stroke="rgba(255, 7, 58, 1)"
              ticks={ticks}
            />
            <YAxis
              tickFormatter={DataFormatter}
              stroke="rgba(255, 7, 58, 1)"
              tick={{fill: 'rgba(255, 7, 58, 1)'}}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{stroke: 'rgba(255, 7, 58, 1)', strokeWidth: 1}}
              wrapperStyle={{
                backgroundColor: 'rgba(226, 232, 240, 1)',
                padding: '10px',
              }}
            />
            <Legend wrapperStyle={{padding: '5px'}} />
            <Line
              type="monotone"
              dataKey="confirmed"
              stroke="rgba(255, 7, 58, 1)"
              dot={{fill: 'rgba(255, 7, 58, 1)'}}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Additional charts */}
    </div>
  )
}

export default LineCharts
