let genderScehema = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    width: 500,
    title: {
      text: 'Gender of JAMstack hackathon participants',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: 'black',
          },
        },
      },
    },
    series: [
      {
        name: 'Gender',
        colorByPoint: true,
        data: [
          {
            name: 'Male',
            y: 4,
          },
          {
            name: 'Female',
            y: 4,
          },
          {
            name: 'Other',
            y: 4,
          },
          {
            name: 'Preferred not to respond',
            y: 4,
          },
        ],
      },
    ],
  }
  
  // console.log(genderScehema.series[0].data)
  export default genderScehema