import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import MainChart from '../components/mainChart'

const options = {
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
    <div className="containter">
      <div className="row">
        <div className="col-6">
          <MainChart />
        </div>
        <div className="col-6">
          <MainChart />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
