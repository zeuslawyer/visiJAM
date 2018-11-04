import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class FrameworksKnownChart extends Component {
  render() {
    return (
      <HighchartsReact highcharts={Highcharts} options={this.props.options} />
    )
  }
}

export default FrameworksKnownChart
