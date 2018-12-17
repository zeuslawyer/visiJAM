import axios from 'axios'
import formatDataFrameworks from './parse_data_frameworks'
import masterFunc from './parse_data_languages'
import { getGenderDataForChart } from './parse_data_gender'
import findUserExperience from './parse_data_years_coding'
const data_from_json_db = require('../../json-dev-db/db.json')

//NOTE:  this loads from the db.json file in the json-dev-db folder. Same data as we collected.
function getSurveyResults(cb) {
  // console.log('getSurveyResults triggered.....\n', data_from_json_db)
  let frameworksData = formatDataFrameworks(data_from_json_db)
  let languagesData = masterFunc(data_from_json_db)
  let yearsCodingData = findUserExperience(data_from_json_db)
  let genderData = getGenderDataForChart(data_from_json_db.submissions)
  return cb({ genderData, frameworksData, languagesData, yearsCodingData })
}

export default getSurveyResults

// function getSurveyResults(cb) {
// console.log('getSurveyResults triggered.....\n')
// const instance = axios.create({
//   headers: {
//     // Authorization: 'Bearer 53901e66bbee40b0a9e797c24a931cf3e6cd49c2',
//     // Authorization: 'Bearer 7e2995fc8d5f73a9e47d07ccbf70bae6272ab139',
//   },
// })

// instance
//   // .get('https://formspree.io/api/0/forms/mrlakawm/submissions')
//   // .get('https://formspree.io/api/0/forms/xolnelem/submissions')
//   .get('json-dev-db/db.json')
//   .then(res => {
//     // console.log(databd)
//     const data = res.data
//     let frameworksData = formatDataFrameworks(data)
//     let languagesData = masterFunc(data)
//     let yearsCodingData = findUserExperience(data)
//     let genderData = getGenderDataForChart(data.submissions)
//     return cb({ genderData, frameworksData, languagesData, yearsCodingData })
//   })
//   .catch(err => console.log(err.message))
// }
