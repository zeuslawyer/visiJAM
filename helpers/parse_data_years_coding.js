import * as surveyData from '../form-schema.json'

const FORM_SUB = surveyData.submissions

const EXPERIENCE = {
  lessThan6: 0,
  sixAndTwelve: 0,
  oneToTwo: 0,
  threeToFive: 0,
  fivePlus: 0,
}

function findUserExperience() {
  for (let i = 0; i < FORM_SUB.length; i++) {
    if (FORM_SUB[i].yearsOfExperience === 'lessThan6') {
      EXPERIENCE.lessThan6++
    } else if (FORM_SUB[i].yearsOfExperience === '6and12months') {
      EXPERIENCE.sixAndTwelve++
    } else if (FORM_SUB[i].yearsOfExperience === '1to2years') {
      EXPERIENCE.oneToTwo++
    } else if (FORM_SUB[i].yearsOfExperience === '3to5years') {
      EXPERIENCE.threeToFive++
    } else if (FORM_SUB[i].yearsOfExperience === '5+years') {
      EXPERIENCE.fivePlus++
    }
  }
  console.log(EXPERIENCE)
}

findUserExperience()

export default EXPERIENCE
