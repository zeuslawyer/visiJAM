import React from 'react'

import Layout from '../components/layout'
import LanguagesKnownChart from '../components/languagesKnownChart'
import GenderChart from '../components/genderChart'
import YearsOfCodingChart from '../components/yearsOfCodingChart'
import FrameworksKnownChart from '../components/frameworksKnownChart'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col">
          <LanguagesKnownChart />
        </div>
        <div className="col">
          <GenderChart />
        </div>
      </div>
      <div className="row">
      <div className="col">
        <YearsOfCodingChart />
      </div>
      <div className="col">
        <FrameworksKnownChart />
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
