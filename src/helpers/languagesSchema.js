let languagesSchema = {
  chart: {
    type: 'bar',
    width: 500,
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
      data: [0, 3, 0, 2, 0, 1, 0],
    },
    {
      name: 'Intermediate',
      data: [1, 0, 0, 2, 0, 4, 0],
    },
    {
      name: 'Beginner',
      data: [1, 1, 0, 0, 1, 0, 5],
    },
  ],
}

export default languagesSchema
