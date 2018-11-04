import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const EntryForm = () => (
  <Layout>
   <div class="container-fluid">
    <form action="https://formspree.io/xolnelem" method="POST">
      <div class="email form-group">
        <label for="node[email]">Email address</label>
        <input type="email" name="_replyto" class="form-control" id="node[email]" aria-describedby="emailHelp"
          value="" placeholder="Enter email"/>
        <small id="emailHelp" class="form-text text-muted">This is optional!</small>
      </div>

      <div class="card">
        <div class="card-body">
          <div class="gender form-group">
            <h3 class="h3">How do you identify your gender?</h3>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="female" value="female"/>
              <label class="form-check-label" for="female">
                Female
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="male" value="male"/>
              <label class="form-check-label" for="male">
                Male
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="other" value="other"/>
              <label class="form-check-label" for="other">
                Other
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="decline" value="decline to identify"/>
              <label class="form-check-label" for="decline">
                I decline to identify
              </label>
            </div>
          </div>
        </div>
      </div>


      <div class="card">
        <div class="card-body">
          <div class="experience form-group">
            <h3 class="h3">How long have you been coding?</h3>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="yearsOfExperience" id="lessThan6" value="lessThan6"/>
              <label class="form-check-label" for="lessThan6">
                Less than 6 Months
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="yearsOfExperience" id="6and12" value="6and12months"/>
              <label class="form-check-label" for="6and12">
                6 to 12 months
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="yearsOfExperience" id="1to2" value="1to2years"/>
              <label class="form-check-label" for="1to2">
                1 to 2 years
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="yearsOfExperience" id="3to5" value="3to5years"/>
              <label class="form-check-label" for="3to5">
                3 to 5 years
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="yearsOfExperience" id="5+" value="5+years"/>
              <label class="form-check-label" for="5+">
                More than 5 years
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3 class="h3">What is your experience level with these <b> Programming Languages? </b></h3>
          <div class="form-group">
            <label for="javascriptExperience">JavaScript</label>
            <select class="form-control" name="javascriptExperience" id="javascriptExperience">
              <option>No Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div class="form-group">
            <label for="pythonExperience">Python</label>
            <select class="form-control" name="pythonExperience" id="pythonExperience">
              <option>No Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div class="form-group">
            <label for="javaExperience">Java</label>
            <select class="form-control" name="javaExperience" id="javaExperience">
              <option>No Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div class="form-group">
            <label for="c++experience">C++</label>
            <select class="form-control" name="c++experience" id="c++experience">
              <option>No Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div class="form-group">
            <label for="rubyExperience">Ruby </label>
            <select class="form-control" name="rubyExperience" id="rubyExperience">
              <option>No Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div class="form-group">
              <label for="phpExperience">PHP </label>
              <select class="form-control" name="phpExperience" id="phpExperience">
                <option>No Experience</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          <div class="form-group">
            <label for="otherLanguages">Other Languages</label>
            <select class="form-control" name="otherLanguages" id="otherLanguages">
              <option>No Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="h3">How experienced are you working with these <b>frameworks</b>?</h3>
          <div class="form-group">
            <label for="reactFrameworkExperience">React</label>
            <select class="form-control" name="reactFrameworkExperience" id="reactFrameworkExperience">
              <option>No Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div class="form-group">
            <label for="angularFrameworkExperience">Angular</label>
            <select class="form-control" name="angularFrameworkExperience" id="angularFrameworkExperience">
              <option>No Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div class="form-group">
            <label for="vueFrameworkExperience">Vue</label>
            <select class="form-control" name="vueFrameworkExperience" id="vueFrameworkExperience">
              <option>No Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div class="form-group">
            <label for="jqueryFrameworkExperience">JQuery</label>
            <select class="form-control" name="jqueryFrameworkExperience" id="jqueryFrameworkExperience">
              <option>No Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div class="form-group">
            <label for="otherFrameworksExperience">Other</label>
            <select class="form-control" name="otherFrameworksExperience" id="otherFrameworksExperience">
              <option>No Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3 class="h3">What do you hope to take away from this hackathon?</h3>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="moreExp" id="moreExp" name="takeaway"/>
            <label class="form-check-label" for="moreExp">
              More experience coding in a team
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="networking" id="networking" name="takeaway"/>
            <label class="form-check-label" for="networking">
              Networking
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="mentoring" id="mentoring" name="takeaway"/>
            <label class="form-check-label" for="mentoring">
              Being a mentor to others
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="winning" id="winning" name="takeaway"/>
            <label class="form-check-label" for="winning">
              Winning prizes
            </label>
          </div>
        </div>
      </div>

      <div class="button form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>

    </form>
  </div>
  </Layout>
)

export default EntryForm
