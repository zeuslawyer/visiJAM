// import * as surveyData from '../form-schema.json'

// const FORM_SUB = surveyData.submissions

import languagesSchema from './languagesSchema'

function findJavaScriptUsers(data) {
  let JAVASCRIPT = {
    noExperience: 0,
    beginner: 0,
    intermediate: 0,
    advanced: 0,
  }

  for (let i = 0; i < data.submissions.length; i++) {
    if (data.submissions[i].javascriptExperience === 'Beginner') {
      JAVASCRIPT.beginner++
    } else if (data.submissions[i].javascriptExperience === 'Intermediate') {
      JAVASCRIPT.intermediate++
    } else if (data.submissions[i].javascriptExperience === 'Advanced') {
      JAVASCRIPT.advanced++
    } else if (data.submissions[i].javascriptExperience === 'Advanced') {
      JAVASCRIPT.noExperience++
    }
  }
  return JAVASCRIPT
}

function findPythonUsers(data) {
  let PYTHON = {
    noExperience: 0,
    beginner: 0,
    intermediate: 0,
    advanced: 0,
  }

  for (let i = 0; i < data.submissions.length; i++) {
    if (data.submissions[i].pythonExperience === 'Beginner') {
      PYTHON.beginner++
    } else if (data.submissions[i].pythonExperience === 'Intermediate') {
      PYTHON.intermediate++
    } else if (data.submissions[i].pythonExperience === 'Advanced') {
      PYTHON.advanced++
    } else if (data.submissions[i].pythonExperience === 'Advanced') {
      PYTHON.noExperience++
    }
  }
  return PYTHON
}

function findJavaUsers(data) {
  let JAVA = {
    noExperience: 0,
    beginner: 0,
    intermediate: 0,
    advanced: 0,
  }

  for (let i = 0; i < data.submissions.length; i++) {
    if (data.submissions[i].javaExperience === 'Beginner') {
      JAVA.beginner++
    } else if (data.submissions[i].javaExperience === 'Intermediate') {
      JAVA.intermediate++
    } else if (data.submissions[i].javaExperience === 'Advanced') {
      JAVA.advanced++
    } else if (data.submissions[i].javaExperience === 'Advanced') {
      JAVA.noExperience++
    }
  }
  return JAVA
}

function findCPlusPlusUsers(data) {
  let CPLUSPLUS = {
    noExperience: 0,
    beginner: 0,
    intermediate: 0,
    advanced: 0,
  }

  for (let i = 0; i < data.submissions.length; i++) {
    if (data.submissions[i]['c++experience'] === 'Beginner') {
      CPLUSPLUS.beginner++
    } else if (data.submissions[i]['c++experience'] === 'Intermediate') {
      CPLUSPLUS.intermediate++
    } else if (data.submissions[i]['c++experience'] === 'Advanced') {
      CPLUSPLUS.advanced++
    } else if (data.submissions[i]['c++experience'] === 'Advanced') {
      CPLUSPLUS.noExperience++
    }
  }
  return CPLUSPLUS
}

function findRubyUsers(data) {
  let RUBY = {
    noExperience: 0,
    beginner: 0,
    intermediate: 0,
    advanced: 0,
  }

  for (let i = 0; i < data.submissions.length; i++) {
    if (data.submissions[i].rubyExperience === 'Beginner') {
      RUBY.beginner++
    } else if (data.submissions[i].rubyExperience === 'Intermediate') {
      RUBY.intermediate++
    } else if (data.submissions[i].rubyExperience === 'Advanced') {
      RUBY.advanced++
    } else if (data.submissions[i].rubyExperience === 'Advanced') {
      RUBY.noExperience++
    }
  }
  return RUBY
}

function findPhpUsers(data) {
  let PHP = {
    noExperience: 0,
    beginner: 0,
    intermediate: 0,
    advanced: 0,
  }

  for (let i = 0; i < data.submissions.length; i++) {
    if (data.submissions[i].phpExperience === 'Beginner') {
      PHP.beginner++
    } else if (data.submissions[i].phpExperience === 'Intermediate') {
      PHP.intermediate++
    } else if (data.submissions[i].phpExperience === 'Advanced') {
      PHP.advanced++
    } else if (data.submissions[i].phpExperience === 'Advanced') {
      PHP.noExperience++
    }
  }
  return PHP
}

function findOtherUsers(data) {
  let OTHER = {
    noExperience: 0,
    beginner: 0,
    intermediate: 0,
    advanced: 0,
  }
  for (let i = 0; i < data.submissions.length; i++) {
    if (data.submissions[i].otherLanguages === 'Beginner') {
      OTHER.beginner++
    } else if (data.submissions[i].otherLanguages === 'Intermediate') {
      OTHER.intermediate++
    } else if (data.submissions[i].otherLanguages === 'Advanced') {
      OTHER.advanced++
    } else if (data.submissions[i].otherLanguages === 'Advanced') {
      OTHER.noExperience++
    }
  }
  return OTHER
}

function masterFunc(data) {
  let startingSchema = languagesSchema
  let js = findJavaScriptUsers(data)
  let python = findPythonUsers(data)
  let java = findJavaUsers(data)
  let cplus = findCPlusPlusUsers(data)
  let ruby = findRubyUsers(data)
  let php = findPhpUsers(data)
  let other = findOtherUsers(data)

  let updatedData = [
    {
      name: 'Advanced',
      data: [
        js.advanced,
        python.advanced,
        java.advanced,
        cplus.advanced,
        ruby.advanced,
        php.advanced,
        other.advanced,
      ],
    },
    {
      name: 'Intermediate',
      data: [
        js.intermediate,
        python.intermediate,
        java.intermediate,
        cplus.intermediate,
        ruby.intermediate,
        php.intermediate,
        other.intermediate,
      ],
    },
    {
      name: 'Beginner',
      data: [
        js.beginner,
        python.beginner,
        java.beginner,
        cplus.beginner,
        ruby.beginner,
        php.beginner,
        other.beginner,
      ],
    },
  ]
  console.log('inside masterfunc 208, ', updatedData)
  startingSchema.series = updatedData
  console.log('inside masterfunc 210, ', startingSchema)
  return startingSchema
}

export default masterFunc
