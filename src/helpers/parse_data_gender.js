// import * as surveyData from './form-schema.json'
const surveyData= require('../../form-schema.json')

/*   INSTRUCTIONS
    @Params - the array that contains all the respondent responses. on the Formspree API JSON response
    this is the 'submissions' property - the same property in the form-schema.json

    Pass this to getGenderDataForChart()

    @Returns:  an array that follows the Highcharts gender schema. Each element in the array is an object
    with two properties : 'name' and 'y'
*/
const getGenderDataForChart = submissions => {
  //   console.log('....getGenderDataForChart() invoked....')

    var responsesCounts = countGenderResponses(submissions);

    let results = []
    let males = {
       name : 'Male',
       y: responsesCounts.totalMale
    }
    let females = {
       name : 'Female',
       y: responsesCounts.totalFemale
    }
    let others = {
       name : 'Other',
       y: responsesCounts.totalOther
    }
    let declined = {
        name: 'Decline to identify',
        y: responsesCounts.declinedToAnswer
    }
    results.push(males, females, others, declined)
    // console.log(results)
}

const countGenderResponses = (submissions) => {
    console.log('....countGenderResponses() invoked....');
    let maleCount = 0;
    let femaleCount = 0;
    let otherCount = 0;
    let declinedToAnswerCount = 0;
    let totalRespondents = submissions.length

    submissions.forEach((elem, index)=>{
        if (elem.gender) {
            if (elem.gender.toLowerCase() ==='male') {
                maleCount +=1
            }
            if (elem.gender.toLowerCase() ==='female') {
                femaleCount +=1
            }
            if (elem.gender.toLowerCase() ==='other') {
                otherCount +=1
            }
            if (elem.gender.toLowerCase() ==='decline to identify') {
                declinedToAnswerCount +=1
            }
        }

        if (!elem.gender) {
            declinedToAnswerCount += 1;
        }
    })
    //test
    if (totalRespondents != declinedToAnswerCount+maleCount+femaleCount+otherCount) {
        console.log('math error in counting gender responses');
    } else {
        console.log('Totals tally...yay!');
    }
    var res = {
        declinedToAnswer: declinedToAnswerCount,
        totalMale: maleCount,
        totalFemale: femaleCount,
        totalOther: otherCount,
        totalResponses: totalRespondents
    }
    // console.log(res)
    return res
}

  var responsesCounts = countGenderResponses(submissions) {

  let results = []
  let males = {
    name: 'Male',
    y: responsesCounts.totalMale,
  }
  let females = {
    name: 'Female',
    y: responsesCounts.totalFemale,
  }
  let others = {
    name: 'Other',
    y: responsesCounts.totalOther,
  }
  let declined = {
    name: 'Decline to identify',
    y: responsesCounts.declinedToAnswer,
  }
  results.push(males, females, others, declined)
  startingScehma.series[0].data = results
  // console.log('line 40 llllllll ', startingScehma)
  return startingScehma
}

const countGenderResponses = submissions => {
  //   console.log('....countGenderResponses() invoked....')
  let maleCount = 0
  let femaleCount = 0
  let otherCount = 0
  let declinedToAnswerCount = 0
  let totalRespondents = submissions.length

  submissions.forEach((elem, index) => {
    if (elem.gender) {
      if (elem.gender.toLowerCase() === 'male') {
        maleCount += 1
      }
      if (elem.gender.toLowerCase() === 'female') {
        femaleCount += 1
      }
      if (elem.gender.toLowerCase() === 'other') {
        otherCount += 1
      }
      if (elem.gender.toLowerCase() === 'decline to identify') {
        declinedToAnswerCount += 1
      }
    }

    if (!elem.gender) {
      declinedToAnswerCount += 1
    }
  })
  // test
  if (
    totalRespondents !=
    declinedToAnswerCount + maleCount + femaleCount + otherCount
  ) {
    console.log('math error in counting gender responses')
  } else {
    console.log('Totals tally...yay!')
  }
  var res = {
    declinedToAnswer: declinedToAnswerCount,
    totalMale: maleCount,
    totalFemale: femaleCount,
    totalOther: otherCount,
    totalResponses: totalRespondents,
  }
  // console.log(res)
  return res
}

// ***** TEST with node <filename>  ********
// var genderCounts = countGenderResponses(submissions)
const submissions = surveyData.submissions;
getGenderDataForChart(submissions);

export {getGenderDataForChart};
