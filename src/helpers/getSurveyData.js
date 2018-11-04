import axios from 'axios'
import formatDataFrameworks from './parse_data_frameworks'
import masterFunc from './parse_data_languages'
import { getGenderDataForChart } from './parse_data_gender'
import findUserExperience from './parse_data_years_coding'

function getSurveyResults() {
  const instance = axios.create({
    headers: {
      Authorization: 'Bearer 7e2995fc8d5f73a9e47d07ccbf70bae6272ab139',
    },
  })

  instance
    .get('https://formspree.io/api/0/forms/xolnelem/submissions')
    .then(res => {
      const data = res.data
      console.log(data)
      let frameworksData = formatDataFrameworks(res.data)
      // let languagesData = masterFunc(res.data)
      let yearsCodingData = findUserExperience(res.data)
      let genderData = getGenderDataForChart(res.data.submissions)
      // return { frameworksData, languagesData, yearsCodingData, genderData }
      return { frameworksData, yearsCodingData, genderData }
    })
}

export default getSurveyResults
