import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../scss/main.scss'

const headerStyle={
  textAlign:'center',
  margin:'3rem 0',
  fontSize:'5rem'
}

const paragraphStyle={
  maxWidth:'500px',
  textAlign:'center',
  fontSize:'1.2rem'
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <div className="container-fluid">
          <div className="row">
            <div className="header">
              <h1 style={headerStyle}>VisiJAM</h1>
              <div className="row d-flex justify-content-center">
                <div className="col" style={paragraphStyle}>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quisquam accusantium quia odit quas ullam soluta necessitatibus quibusdam, nostrum eligendi atque quo fugit cupiditate numquam laboriosam quam obcaecati ut similique.</p>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
