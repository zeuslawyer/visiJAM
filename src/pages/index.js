import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import LanguagesKnownChart from '../components/languagesKnownChart'
import GenderChart from '../components/genderChart'

const data1 = {
  title: {
    text: 'My chart',
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
}

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
