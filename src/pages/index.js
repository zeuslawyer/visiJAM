import React, { Component } from 'react'
import axios from 'axios'

import genderSchema from '../../helpers/genderSchema'
import frameworksSchema from '../../helpers/frameworksSchema'
import languagesSchema from '../../helpers/languagesSchema'
import yearSchema from '../../helpers/yearsSchema'
import getSurveyResults from '../helpers/getSurveyData'
import Layout from '../components/layout'
import LanguagesKnownChart from '../components/languagesKnownChart'
import GenderChart from '../components/genderChart'
import YearsOfCodingChart from '../components/yearsOfCodingChart'
import FrameworksKnownChart from '../components/frameworksKnownChart'
import yearsSchema from '../../helpers/yearsSchema'
import loaderGif from '../images/loader_index.gif'

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
    //if we call "getData" here, the app works, but gives a warning about setting state on an unmounted component
    //and data is not updated in the charts
    //other option is to call in render (gets rid of error but makes continuous calls api--> infinite loop of updating state)
    // this.getData()
    // this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  // returns { frameworksData, languagesData, yearsCodingData, genderData }
  getData() {
    // console.log('inside getData fff')

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
      // return <div>LOADING</div>
      return (
        <div className="header ">
          <img className="loader" src={loaderGif} />
        </div>
      )
    }

    //Random comment to see if changes and PR to Test branch trigger deploy in netlify
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
          <div className="row mt-3">
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
