import axios from 'axios'
import formatDataFrameworks from './helpers/parse_data_frameworks'
import masterFunc from '../helpers/parse_data_languages'
import { getGenderDataForChart } from '../helpers/parse_data_gender'
import findUserExperience from '../helpers/parse_data_years_coding'

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
      let languagesData = masterFunc(res.data)
      let yearsCodingData = findUserExperience(res.data)
      let genderData = getGenderDataForChart(res.data.submissions)
      return { frameworksData, languagesData, yearsCodingData, genderData }
    })
}
