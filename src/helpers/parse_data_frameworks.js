//OLD CODE--> for reference (now data comes from axios req)
// import * as surveyData from '../form-schema.json'
//array of dataObjects for each user who has submitted form
// const FORM_SUBMISSIONS = surveyData.submissions
import frameworksSchema from './frameworksSchema'

//formats data for Frameworks charts
//takes raw JSON array from form schema and returns Object with total count of users by experience level
//example output {Javascript: {beginner: 4, intermediate: 8, advanced: 10}}
function getCountsFrameworks(formData, framework) {
  let count = {}
  for (let i = 0; i < formData.length; i++) {
    //update count for beginner, intermediate and advanced if user responded
    if (formData[i][framework]) {
      count[formData[i][framework]]
        ? count[formData[i][framework]]++
        : (count[formData[i][framework]] = 1)
    }
  }
  return count
}

//formats data for Frameworks charts
//takes object with total users by language and experience levels and returns data Object matching HighCharts Schema
//example input {Javascript: {beginner: 4, intermediate: 8, advanced: 10}}
function formatDataFrameworks(formData) {
  let angularCount = getCountsFrameworks(
    formData.submissions,
    'angularFrameworkExperience'
  )
  let jqueryCount = getCountsFrameworks(
    formData.submissions,
    'jqueryFrameworkExperience'
  )
  let reactCount = getCountsFrameworks(
    formData.submissions,
    'reactFrameworkExperience'
  )
  let vueCount = getCountsFrameworks(
    formData.submissions,
    'vueFrameworkExperience'
  )
  let otherCount = getCountsFrameworks(
    formData.submissions,
    'otherFrameworkExperience'
  )

  let countsObject = {
    angularCount,
    jqueryCount,
    reactCount,
    vueCount,
    otherCount,
  }

  let startingSchema = frameworksSchema
  let updatedData = [
    {
      name: 'Advanced',
      data: [
        countsObject.reactCount.Advanced || 0,
        countsObject.angularCount.Advanced || 0,
        countsObject.vueCount.Advanced || 0,
        countsObject.jqueryCount.Advanced || 0,
        countsObject.otherCount.Advanced || 0,
      ],
    },
    {
      name: 'Intermediate',
      data: [
        countsObject.reactCount.Intermediate || 0,
        countsObject.angularCount.Intermediate || 0,
        countsObject.vueCount.Intermediate || 0,
        countsObject.jqueryCount.Intermediate || 0,
        countsObject.otherCount.Intermediate || 0,
      ],
    },
    {
      name: 'Beginner',
      data: [
        countsObject.reactCount.Beginner || 0,
        countsObject.angularCount.Beginner || 0,
        countsObject.vueCount.Beginner || 0,
        countsObject.jqueryCount.Beginner || 0,
        countsObject.otherCount.Beginner || 0,
      ],
    },
  ]
  console.log('line 89, ssssssss', startingSchema)
  startingSchema.series = updatedData
  return startingSchema
}

export default formatDataFrameworks
