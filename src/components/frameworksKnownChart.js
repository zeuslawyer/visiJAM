import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    type: 'bar',
    width: 500,
  },
  title: {
    text: 'Frameworks Languages by Experience Level',
  },
  xAxis: {
    categories: ['React', 'Angular', 'View', 'JQuery', 'Other'],
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
  series: [
    {
      name: 'Advanced',
      data: [5, 3, 4, 7, 2],
    },
    {
      name: 'Intermediate',
      data: [2, 2, 3, 2, 1],
    },
    {
      name: 'Beginner',
      data: [3, 4, 4, 2, 5],
    },
  ],
}

const FrameworksKnownChart = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
)
export default FrameworksKnownChart
