import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import frameworksData from '../../helpers/parse_data_frameworks'

const options = {
  chart: {
    type: 'bar',
    // width: 500,
  },
  title: {
    text: 'Frameworks Languages by Experience Level',
  },
  xAxis: {
    categories: ['React', 'Angular', 'Vue', 'JQuery', 'Other'],
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total JAMstackers using each language',
    },
  },
  legend: {
    reversed: true,
  },
  plotOptions: {
    series: {
      stacking: 'normal',
    },
  },
  series: frameworksData,
}

const FrameworksKnownChart = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
)
export default FrameworksKnownChart
