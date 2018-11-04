let yearsSchema = {
  chart: {
    type: 'column',
    // width: 500
  },
  title: {
    text: 'Years of Coding',
  },
  xAxis: {
    categories: [
      'Less than 6 months',
      'Between 6 to 12 months',
      'Between 1 to 2 years',
      'Between 3 to 5 years',
      'More than 5 years',
    ],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Count',
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      showInLegend: false,
      name: '',
      //'Less than 6 months', 'Between 6 to 12 months', 'Between 1 to 2 years', 'Between 3 to 5 years', 'More than 5 years'
      data: [1, 1, 1, 1, 1],
    },
  ],
}

export default yearsSchema
