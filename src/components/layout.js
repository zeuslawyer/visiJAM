import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './header'
import '../scss/main.scss'

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
            { name: 'description', content: 'VisiJAM' },
            { name: 'keywords', content: 'jamstack, data visualization' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Header />

        <div className="container-fluid">
          <div className="row">
            {children}
          </div>
          <div className="row">
            <footer className="footer">
            <div className="container d-flex flex-column align-items-center justify-content-center">
              <p className="footer-text">VisiJAM Project @ JAMstack 2018</p>
            </div>
            </footer>
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
