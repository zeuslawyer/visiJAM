import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const onSubmit = event => {
  event.preventDefault()
  const data = new FormData(event.target)

  // fetch('/api/form-submit-url', {
  //   method: 'POST',
  //   body: data,
  // });
  console.log(data)
}

const EntryForm = () => (
  <Layout>
    <div className="container">
      {/* <form action="https://formspree.io/mrlakawm" method="POST"> */}
      {/* <form action="http://localhost:9000/newUser" method="POST"> */}
      <form onSubmit={onSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="col col-sm-6 col-md-5 email">
            <div className="form-group mx-auto">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="_replyto"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                This is optional!
              </small>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="gender form-group">
                  <h3 className="h3">How do you identify your gender?</h3>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="other"
                      value="other"
                    />
                    <label className="form-check-label" htmlFor="other">
                      Other
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="decline"
                      value="decline to identify"
                    />
                    <label className="form-check-label" htmlFor="decline">
                      I decline to identify
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <h3 className="h3">How long have you been coding?</h3>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="yearsOfExperience"
                      id="lessThan6"
                      value="lessThan6"
                    />
                    <label className="form-check-label" htmlFor="lessThan6">
                      Less than 6 Months
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="yearsOfExperience"
                      id="6and12"
                      value="6and12months"
                    />
                    <label className="form-check-label" htmlFor="6and12">
                      6 to 12 months
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="yearsOfExperience"
                      id="1to2"
                      value="1to2years"
                    />
                    <label className="form-check-label" htmlFor="1to2">
                      1 to 2 years
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="yearsOfExperience"
                      id="3to5"
                      value="3to5years"
                    />
                    <label className="form-check-label" htmlFor="3to5">
                      3 to 5 years
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="yearsOfExperience"
                      id="5+"
                      value="5+years"
                    />
                    <label className="form-check-label" htmlFor="5+">
                      More than 5 years
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="h3">
                  What is your experience level with these{' '}
                  <b> Programming Languages? </b>
                </h3>
                <div className="form-group">
                  <label htmlFor="javascriptExperience">JavaScript</label>
                  <select
                    className="form-control"
                    name="javascriptExperience"
                    id="javascriptExperience"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="pythonExperience">Python</label>
                  <select
                    className="form-control"
                    name="pythonExperience"
                    id="pythonExperience"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="javaExperience">Java</label>
                  <select
                    className="form-control"
                    name="javaExperience"
                    id="javaExperience"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="c++experience">C++</label>
                  <select
                    className="form-control"
                    name="c++experience"
                    id="c++experience"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="rubyExperience">Ruby </label>
                  <select
                    className="form-control"
                    name="rubyExperience"
                    id="rubyExperience"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="phpExperience">PHP </label>
                  <select
                    className="form-control"
                    name="phpExperience"
                    id="phpExperience"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="otherLanguages">Other Languages</label>
                  <select
                    className="form-control"
                    name="otherLanguages"
                    id="otherLanguages"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="h3">
                  How experienced are you working with these <b>frameworks</b>?
                </h3>
                <div className="form-group">
                  <label htmlFor="reactFrameworkExperience">React</label>
                  <select
                    className="form-control"
                    name="reactFrameworkExperience"
                    id="reactFrameworkExperience"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="angularFrameworkExperience">Angular</label>
                  <select
                    className="form-control"
                    name="angularFrameworkExperience"
                    id="angularFrameworkExperience"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="vueFrameworkExperience">Vue</label>
                  <select
                    className="form-control"
                    name="vueFrameworkExperience"
                    id="vueFrameworkExperience"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="jqueryFrameworkExperience">JQuery</label>
                  <select
                    className="form-control"
                    name="jqueryFrameworkExperience"
                    id="jqueryFrameworkExperience"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="otherFrameworksExperience">Other</label>
                  <select
                    className="form-control"
                    name="otherFrameworksExperience"
                    id="otherFrameworksExperience"
                  >
                    <option>No Experience</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="h3">
                  What do you hope to take away from this hackathon?
                </h3>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="moreExp"
                    id="moreExp"
                    name="takeaway"
                  />
                  <label className="form-check-label" htmlFor="moreExp">
                    More experience coding in a team
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="networking"
                    id="networking"
                    name="takeaway"
                  />
                  <label className="form-check-label" htmlFor="networking">
                    Networking
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="mentoring"
                    id="mentoring"
                    name="takeaway"
                  />
                  <label className="form-check-label" htmlFor="mentoring">
                    Being a mentor to others
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="winning"
                    id="winning"
                    name="takeaway"
                  />
                  <label className="form-check-label" htmlFor="winning">
                    Winning prizes
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="button-wrapper d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  </Layout>
)

export default EntryForm
