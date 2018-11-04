let frameworksSchema = {
  chart: {
    type: 'bar',
    width: 500,
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
  series: [
    {
      name: 'Advanced',
      data: [1, 0, 0, 4, 0],
    },
    {
      name: 'Intermediate',
      data: [3, 2, 0, 0, 0],
    },
    {
      name: 'Beginner',
      data: [0, 0, 0, 2, 0],
    },
  ],
}

// console.log(frameworksSchema.series)
export default frameworksSchema