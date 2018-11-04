// import * as surveyData from '../form-schema.json'

// const FORM_SUB = surveyData.submissions

import yearsSchema from './yearsSchema'

function findUserExperience(data) {
  let startSchema = yearsSchema

  let EXPERIENCE = {
    lessThan6: 0,
    sixAndTwelve: 0,
    oneToTwo: 0,
    threeToFive: 0,
    fivePlus: 0,
  }

  for (let i = 0; i < data.submissions.length; i++) {
    if (data.submissions[i].yearsOfExperience === 'lessThan6') {
      EXPERIENCE.lessThan6++
    } else if (data.submissions[i].yearsOfExperience === '6and12months') {
      EXPERIENCE.sixAndTwelve++
    } else if (data.submissions[i].yearsOfExperience === '1to2years') {
      EXPERIENCE.oneToTwo++
    } else if (data.submissions[i].yearsOfExperience === '3to5years') {
      EXPERIENCE.threeToFive++
    } else if (data.submissions[i].yearsOfExperience === '5+years') {
      EXPERIENCE.fivePlus++
    }
  }

  startSchema.series[0].data = [
    EXPERIENCE.lessThan6,
    EXPERIENCE.sixAndTwelve,
    EXPERIENCE.oneToTwo,
    EXPERIENCE.threeToFive,
    EXPERIENCE.fivePlus,
  ]
  return startSchema
}

export default findUserExperience
