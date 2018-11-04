import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {
  JAVASCRIPT,
  PYTHON,
  JAVA,
  CPLUSPLUS,
  RUBY,
  PHP,
  OTHER,
} from '../../helpers/parse_data_languages'

const options = {
  chart: {
    type: 'bar',
    // width: 500
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
    allowDecimals: false,
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
      data: [
        JAVASCRIPT.advanced,
        PYTHON.advanced,
        JAVA.advanced,
        CPLUSPLUS.advanced,
        RUBY.advanced,
        PHP.advanced,
        OTHER.advanced,
      ],
    },
    {
      name: 'Intermediate',
      data: [
        JAVASCRIPT.intermediate,
        PYTHON.intermediate,
        JAVA.intermediate,
        CPLUSPLUS.intermediate,
        RUBY.intermediate,
        PHP.intermediate,
        OTHER.intermediate,
      ],
    },
    {
      name: 'Beginner',
      data: [
        JAVASCRIPT.beginner,
        PYTHON.beginner,
        JAVA.beginner,
        CPLUSPLUS.beginner,
        RUBY.beginner,
        PHP.beginner,
        OTHER.beginner,
      ],
    },
  ],
}

const LanguagesKnownChart = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
)
export default LanguagesKnownChart
