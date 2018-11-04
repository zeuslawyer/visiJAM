import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class GenderChart extends Component {
  render() {
    console.log('gender props mmmmm', this.props)
    return (
      <HighchartsReact highcharts={Highcharts} options={this.props.options} />
    )
  }
}

export default GenderChart
