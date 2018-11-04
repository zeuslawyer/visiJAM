import * as surveyData from '../form-schema.json'

const FORM_SUB = surveyData.submissions

const JAVASCRIPT = {
  noExperience: 0,
  beginner: 0,
  intermediate: 0,
  advanced: 0,
}
const PYTHON = {
  noExperience: 0,
  beginner: 0,
  intermediate: 0,
  advanced: 0,
}
const JAVA = {
  noExperience: 0,
  beginner: 0,
  intermediate: 0,
  advanced: 0,
}
const CPLUSPLUS = {
  noExperience: 0,
  beginner: 0,
  intermediate: 0,
  advanced: 0,
}
const RUBY = {
  noExperience: 0,
  beginner: 0,
  intermediate: 0,
  advanced: 0,
}
const PHP = {
  noExperience: 0,
  beginner: 0,
  intermediate: 0,
  advanced: 0,
}
const OTHER = {
  noExperience: 0,
  beginner: 0,
  intermediate: 0,
  advanced: 0,
}

function findJavaScriptUsers() {
  for (let i = 0; i < FORM_SUB.length; i++) {
    if (FORM_SUB[i].javascriptExperience === 'Beginner') {
      JAVASCRIPT.beginner++
    } else if (FORM_SUB[i].javascriptExperience === 'Intermediate') {
      JAVASCRIPT.intermediate++
    } else if (FORM_SUB[i].javascriptExperience === 'Advanced') {
      JAVASCRIPT.advanced++
    } else if (FORM_SUB[i].javascriptExperience === 'Advanced') {
      JAVASCRIPT.noExperience++
    }
  }
}
function findPythonUsers() {
  for (let i = 0; i < FORM_SUB.length; i++) {
    if (FORM_SUB[i].pythonExperience === 'Beginner') {
      PYTHON.beginner++
    } else if (FORM_SUB[i].pythonExperience === 'Intermediate') {
      PYTHON.intermediate++
    } else if (FORM_SUB[i].pythonExperience === 'Advanced') {
      PYTHON.advanced++
    } else if (FORM_SUB[i].pythonExperience === 'Advanced') {
      PYTHON.noExperience++
    }
  }
}
function findJavaUsers() {
  for (let i = 0; i < FORM_SUB.length; i++) {
    if (FORM_SUB[i].javaExperience === 'Beginner') {
      JAVA.beginner++
    } else if (FORM_SUB[i].javaExperience === 'Intermediate') {
      JAVA.intermediate++
    } else if (FORM_SUB[i].javaExperience === 'Advanced') {
      JAVA.advanced++
    } else if (FORM_SUB[i].javaExperience === 'Advanced') {
      JAVA.noExperience++
    }
  }
}
function findCPlusPlusUsers() {
  for (let i = 0; i < FORM_SUB.length; i++) {
    if (FORM_SUB[i]['c++experience'] === 'Beginner') {
      CPLUSPLUS.beginner++
    } else if (FORM_SUB[i]['c++experience'] === 'Intermediate') {
      CPLUSPLUS.intermediate++
    } else if (FORM_SUB[i]['c++experience'] === 'Advanced') {
      CPLUSPLUS.advanced++
    } else if (FORM_SUB[i]['c++experience'] === 'Advanced') {
      CPLUSPLUS.noExperience++
    }
  }
}
function findRubyUsers() {
  for (let i = 0; i < FORM_SUB.length; i++) {
    if (FORM_SUB[i].rubyExperience === 'Beginner') {
      RUBY.beginner++
    } else if (FORM_SUB[i].rubyExperience === 'Intermediate') {
      RUBY.intermediate++
    } else if (FORM_SUB[i].rubyExperience === 'Advanced') {
      RUBY.advanced++
    } else if (FORM_SUB[i].rubyExperience === 'Advanced') {
      RUBY.noExperience++
    }
  }
}
function findPhpUsers() {
  for (let i = 0; i < FORM_SUB.length; i++) {
    if (FORM_SUB[i].phpExperience === 'Beginner') {
      PHP.beginner++
    } else if (FORM_SUB[i].phpExperience === 'Intermediate') {
      PHP.intermediate++
    } else if (FORM_SUB[i].phpExperience === 'Advanced') {
      PHP.advanced++
    } else if (FORM_SUB[i].phpExperience === 'Advanced') {
      PHP.noExperience++
    }
  }
}
function findOtherUsers() {
  for (let i = 0; i < FORM_SUB.length; i++) {
    if (FORM_SUB[i].otherLanguages === 'Beginner') {
      OTHER.beginner++
    } else if (FORM_SUB[i].otherLanguages === 'Intermediate') {
      OTHER.intermediate++
    } else if (FORM_SUB[i].otherLanguages === 'Advanced') {
      OTHER.advanced++
    } else if (FORM_SUB[i].otherLanguages === 'Advanced') {
      OTHER.noExperience++
    }
  }
}

findJavaScriptUsers()
findPythonUsers()
findJavaUsers()
findCPlusPlusUsers()
findRubyUsers()
findPhpUsers()
findOtherUsers()
export { JAVASCRIPT, PYTHON, JAVA, CPLUSPLUS, RUBY, PHP, OTHER }
