import axios from 'axios'
import formatDataFrameworks from './parse_data_frameworks'
import masterFunc from './parse_data_languages'
import { getGenderDataForChart } from './parse_data_gender'
import findUserExperience from './parse_data_years_coding'

function getSurveyResults(cb) {
  console.log('inside getsurveyresults tttttttttt')
  const instance = axios.create({
    headers: {
      Authorization: 'Bearer 53901e66bbee40b0a9e797c24a931cf3e6cd49c2',
      // Authorization: 'Bearer 7e2995fc8d5f73a9e47d07ccbf70bae6272ab139',
    },
  })

  instance
    .get('https://formspree.io/api/0/forms/mrlakawm/submissions')
    // .get('https://formspree.io/api/0/forms/xolnelem/submissions')
    .then(res => {
      const data = res.data
      let frameworksData = formatDataFrameworks(data)
      let languagesData = masterFunc(data)
      let yearsCodingData = findUserExperience(data)
      let genderData = getGenderDataForChart(data.submissions)
      return cb({ genderData, frameworksData, languagesData, yearsCodingData })
    })
    .catch(err => console.log(err.message))
}

export default getSurveyResults
