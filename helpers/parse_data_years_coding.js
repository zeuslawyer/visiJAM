import * as surveyData from '../form-schema.json'

const FORM_SUB = surveyData.submissions

const EXPERIENCE = {
  noExperience: 0,
  lessThan6: 0,
  sixAndTwelve: 0,
  oneToTwo: 0,
  threeToFive: 0,
  fivePlus: 0,
}

function findUserExperience() {
  for (let i = 0; i < FORM_SUB.length; i++) {
    if (FORM_SUB.yearsOfExperience === 'lessThan6') {
      EXPERIENCE.lessThan6++
    } else if (FORM_SUB.yearsOfExperience === '6and12months') {
      EXPERIENCE.sixAndTwelve++
    } else if (FORM_SUB.yearsOfExperience === '1to2years') {
      EXPERIENCE.oneToTwo++
    } else if (FORM_SUB.yearsOfExperience === '3to5years') {
      EXPERIENCE.threeToFive++
    } else if (FORM_SUB.yearsOfExperience === '5+years') {
      EXPERIENCE.fivePlus++
    } else if (FORM_SUB.yearsOfExperience === 'No Experience') {
      EXPERIENCE.noExperience++
    }
  }
}
findUserExperience()

export default EXPERIENCE
