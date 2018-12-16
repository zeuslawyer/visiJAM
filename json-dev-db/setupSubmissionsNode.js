const one = require('./one.json') //first json file from formspree api
const two = require('./two.json') //second json file from formspree api
const axios = require('axios')

const first = one.submissions
const second = two.submissions

const len = first.length + second.length
// console.log(first.length, second.length, 'TOTAL: ', len)

const combined = [...first, ...second]
// console.log(combined.length)

const populateDB = submissions => {
  submissions.forEach(sub => {
    axios
      .post('http://localhost:8888/submissions', sub)
      .then(function(response) {
        console.log(response.data._date)
      })
      .catch(function(error) {
        console.log(error.message)
      })
  })
}

populateDB(combined)

axios
  .get('http://localhost:8888/submissions')
  .then(function(response) {
    console.log(response.data.length === combined.length)
  })
  .catch(function(error) {
    console.log(error.message)
  })
