import React, { Component } from 'react'
import axios from 'axios'

import Layout from '../components/layout'
import LanguagesKnownChart from '../components/languagesKnownChart'
import GenderChart from '../components/genderChart'
import YearsOfCodingChart from '../components/yearsOfCodingChart'
import FrameworksKnownChart from '../components/frameworksKnownChart'

class IndexPage extends Component {
  componentDidMount() {
    const instance = axios.create({
      headers: {
        'Authorization': 'Bearer 7e2995fc8d5f73a9e47d07ccbf70bae6272ab139'
      }
    })
    instance.get('https://formspree.io/api/0/forms/xolnelem/submissions')
      .then(res => {
        const data = res.data;
        console.log(data);
      })
  }

  render() {
    return (
      <Layout>
        <div className="container mt-3">
          <div className="row">
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  <LanguagesKnownChart />
                </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  <GenderChart />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  <YearsOfCodingChart />
                </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="card">
                <div className="card-body">
                  <FrameworksKnownChart />
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
