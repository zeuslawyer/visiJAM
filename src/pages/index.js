import React, { Component } from 'react'
import axios from 'axios'
import genderSchema from '../../helpers/genderSchema'
import frameworksSchema from '../../helpers/frameworksSchema'
import languagesSchema from '../../helpers/languagesSchema'
import yearSchema from '../../helpers/yearsSchema'
import getSurveyResults from '../../getSurveyData'

import Layout from '../components/layout'
import LanguagesKnownChart from '../components/languagesKnownChart'
import GenderChart from '../components/genderChart'
import YearsOfCodingChart from '../components/yearsOfCodingChart'
import FrameworksKnownChart from '../components/frameworksKnownChart'
import yearsSchema from '../../helpers/yearsSchema'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      genderData: genderSchema,
      frameworksData: frameworksSchema,
      languagesData: languagesSchema,
      yearsCodingData: yearsSchema,
    }
    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  // getSurveyResults returns object with keys: { frameworksData, languagesData, yearsCodingData, genderData }
  getData() {
    getSurveyResults(data => {
      this.setState({
        genderData: data.genderData,
        frameworksData: data.frameworksData,
        languagesData: data.languagesData,
        yearsCodingData: data.yearsCodingData,
        loading: false,
      })
    })
  }

  render() {
    if (this.state.loading) {
      return <div>LOADING</div>
    }

    return (
      <Layout>
        <div className="container mt-3">
          <div className="row">
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  <LanguagesKnownChart options={this.state.languagesData} />
                </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  <GenderChart options={this.state.genderData} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  <YearsOfCodingChart options={this.state.yearsCodingData} />
                </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  <FrameworksKnownChart options={this.state.frameworksData} />
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
