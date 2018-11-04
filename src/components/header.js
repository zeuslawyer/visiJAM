import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div className="header">
    <h1>VisiJAM</h1>
    <div className="row d-flex justify-content-center">
      <div className="col paragraph-container">
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
)

export default Header
