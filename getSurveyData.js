import axios from 'axios'
import formatDataFrameworks from './helpers/parse_data_frameworks'
import masterFunc from './helpers/parse_data_languages'
import { getGenderDataForChart } from './helpers/parse_data_gender'
import findUserExperience from './helpers/parse_data_years_coding'

function getSurveyResults(cb) {
  console.log('inside getsurveyresults tttttttttt')
  const instance = axios.create({
    headers: {
      Authorization: 'Bearer 7e2995fc8d5f73a9e47d07ccbf70bae6272ab139',
    },
  })

  instance
    .get('https://formspree.io/api/0/forms/xolnelem/submissions')
    .then(res => {
      const data = res.data
      // console.log('data >>>>>>>', data.submissions)
      let frameworksData = formatDataFrameworks(res.data)
      // let languagesData = masterFunc(res.data)
      // let yearsCodingData = findUserExperience(res.data)
      let genderData = getGenderDataForChart(data.submissions)
      // return { frameworksData, languagesData, yearsCodingData, genderData }
      return cb({ genderData, frameworksData })
    })
    .catch(err => console.log(err.message))
}

export default getSurveyResults
