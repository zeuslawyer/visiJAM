import Layout from '../components/layout'
import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'

class TestForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    console.log(data)
    axios({
      method: 'post',
      url: 'http://localhost:9000/.netlify/functions/newUser',
      data: data,
      config: { headers: headers },
    })
      .then(function(response) {
        //handle success
        console.log(response)
      })
      .catch(function(response) {
        //handle error
        console.log(response)
      })
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" />

          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="birthdate">Enter your birth date</label>
          <input id="birthdate" name="birthdate" type="text" />

          <button>Send data!</button>
        </form>
      </Layout>
    )
  }
}

export default TestForm
