/**
 * Module that maps old metadata to new metadata set
 */

module.exports = jsonData => {
  return {
    title: jsonData.title,
    wordClasses: getWordClasses(jsonData.formTypes),
    tags: jsonData.contentTags,
    synonyms: jsonData.synonyms,
    relatedTerms: jsonData.referenceLinks,
    readMore: [],
  }
}

const wordClassMapping = {
  v: 'verb',
  adj: 'adjective',
  n: 'noun',
}

function getWordClasses(formTypes) {
  let result = []
  formTypes.forEach(formType => {
    formType.wordClasses.forEach(formType => {
      result.push(wordClassMapping[formType])
    })
  })

  return result
}
