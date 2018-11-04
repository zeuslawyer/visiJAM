import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

//I don't think we need this any more...options being passed as a prop in index.js
// const options = {
//   chart: {
//     plotBackgroundColor: null,
//     plotBorderWidth: null,
//     plotShadow: false,
//     type: 'pie',
//     // width: 500
//   },
//   title: {
//     text: 'Gender Distribution',
//   },
//   tooltip: {
//     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
//   },
//   plotOptions: {
//     pie: {
//       allowPointSelect: true,
//       cursor: 'pointer',
//       dataLabels: {
//         enabled: true,
//         format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//         style: {
//           color:
//             (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
//         },
//       },
//     },
//   },
//   series: [
//     {
//       name: 'Gender',
//       colorByPoint: true,
//       data: [
//         {
//           name: 'Male',
//           y: 0,
//         },
//         {
//           name: 'Female',
//           y: 0,
//         },
//         {
//           name: 'Other',
//           y: 0,
//         },
//       ],
//     },
//   ],
// }

class GenderChart extends Component {
  render() {
    console.log('gender props mmmmm', this.props)
    return (
      <HighchartsReact highcharts={Highcharts} options={this.props.options} />
    )
  }
}

export default GenderChart
