import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    type: 'bar',
    width: 500
  },
  title: {
    text: 'Programming Languages by Experience Level',
  },
  xAxis: {
    categories: ['Javascript', 'Python', 'Java', 'C++', 'Ruby', 'PHP', 'Other'],
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total JAMstackers using each language',
    },
    allowDecimals: false
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
      data: [5, 3, 4, 7, 2, 10, 2],
    },
    {
      name: 'Intermediate',
      data: [2, 2, 3, 2, 1, 1, 0],
    },
    {
      name: 'Beginner',
      data: [3, 4, 4, 2, 5, 9, 5],
    },
  ],
}

const LanguagesKnownChart = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
)
export default LanguagesKnownChart
