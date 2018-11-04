import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './header'
import '../scss/main.scss'

const headerStyle={
  textAlign:'center',
  margin:'2rem 0 1rem',
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
            { name: 'description', content: 'VisiJAM' },
            { name: 'keywords', content: 'jamstack, data visualization' },
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
                <p>Real-time Hackathon Demographics</p>                 
                <div className="d-flex justify-content-around">
                 <Link to="/">
                   <button className="btn btn-outline-dark" >Home</button>
                 </Link>
                 <Link to="/entry-form">
                   <button className="btn btn-outline-dark" >Entry form</button>
                 </Link>
                 </div>
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
