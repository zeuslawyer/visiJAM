import React from 'react'

import Layout from '../components/layout'
import LanguagesKnownChart from '../components/languagesKnownChart'
import GenderChart from '../components/genderChart'
import YearsOfCodingChart from '../components/yearsOfCodingChart'
import FrameworksKnownChart from '../components/frameworksKnownChart'

const IndexPage = () => (
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

export default IndexPage
