import React from 'react'

import Layout from '../components/layout'
import LanguagesKnownChart from '../components/languagesKnownChart'
import GenderChart from '../components/genderChart'

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
    </div>
  </Layout>
)

export default IndexPage
