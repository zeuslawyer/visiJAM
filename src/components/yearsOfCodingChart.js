import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
      type: 'column',
      width: 500
  },
  title: {
      text: 'Years of Coding'
  },
  xAxis: {
      categories: [
          'No Experience',
          'Beginner',
          'Intermediate',
          'Advanced'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Count'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
     showInLegend: false,
      name: '',
      data: [49.9, 71.5, 106.4, 129.2]

  }]
}

const YearsOfCodingChart = () => (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      ></HighchartsReact>
)
export default YearsOfCodingChart
