import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    width: 500
},
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

const LanguagesKnownChart = () => (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      ></HighchartsReact>
)
export default LanguagesKnownChart
