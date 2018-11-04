import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import getGenderDataForChart from '../../helpers/parse_data_gender


const options = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      // width: 500
  },
  title: {
      text: 'Gender Distribution'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
          }
      }
  },
  series: [{
      name: 'Gender',
      colorByPoint: true,
      data: [{
          name: 'Male',
          y: 60
      }, {
          name: 'Female',
          y: 40
      }, {
          name: 'Other',
          y: 10
      }]
  }]
};

getGenderDataForChart()
const GenderChart = () => (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      ></HighchartsReact>
)
export default getGenderDataForChart(surveyData.submissions)
