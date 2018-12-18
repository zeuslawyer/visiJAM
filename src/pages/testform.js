import Layout from '../components/layout'
import React from 'react'
import { Link, navigate } from 'gatsby'
import axios from 'axios'

class TestForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    //converts formData object into a data object
    let data = {}
    for (const [key, value] of formData.entries()) {
      data[key] = value
    }
    data = JSON.stringify(data) // stringify prior to sending to server
    console.log('stringified data is...', data)

    axios({
      method: 'post',
      url: '/.netlify/functions/newUser',
      data: data,
    })
      .then(function(user) {
        //handle success
        console.log('RESPONSE from AXIOS: ', user.data)
        navigate('/')
      })
      .catch(function(error) {
        //handle error
        console.log('ERROR IN AXIOS:   ', error)
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
