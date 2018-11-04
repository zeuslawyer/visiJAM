import React, { Component } from 'react'
import axios from 'axios'
import getSurveyResults from '../../getSurveyData'

import Layout from '../components/layout'
import LanguagesKnownChart from '../components/languagesKnownChart'
import GenderChart from '../components/genderChart'
import YearsOfCodingChart from '../components/yearsOfCodingChart'
import FrameworksKnownChart from '../components/frameworksKnownChart'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    // { frameworksData, languagesData, yearsCodingData, genderData }
    this.chartData = getSurveyResults()
  }

  render() {
    return (
      <Layout>
        <div className="container mt-3">
          <div className="row">
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  {/* <LanguagesKnownChart options={this.chartData.languagesData} /> */}
                </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  {/* <GenderChart options={this.chartData.genderData} /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  {/* <YearsOfCodingChart
                    options={this.chartData.yearsCodingData}
                  /> */}
                </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  {/* <FrameworksKnownChart
                    optioms={this.chartData.frameworksData}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
