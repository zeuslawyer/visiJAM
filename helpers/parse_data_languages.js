// import * as surveyData from '../form-schema.json'

// const FORM_SUB = surveyData.submissions

function findJavaScriptUsers(data) {
  const JAVASCRIPT = {
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
}

function findPythonUsers(data) {
  const PYTHON = {
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
}

function findJavaUsers(data) {
  const JAVA = {
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
}

function findCPlusPlusUsers(data) {
  const CPLUSPLUS = {
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
}

function findRubyUsers(data) {
  const RUBY = {
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
}

function findPhpUsers(data) {
  const PHP = {
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
}

function findOtherUsers(data) {
  const OTHER = {
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
}

function masterFunc(data) {
  findJavaScriptUsers(data)
  findPythonUsers(data)
  findJavaUsers(data)
  findCPlusPlusUsers(data)
  findRubyUsers(data)
  findPhpUsers(data)
  findOtherUsers(data)
}
export default masterFunc
