const fs = require('fs')
const yaml = require('json2yaml')
const mapFrontMatter = require('./metadata-mapper')

module.exports = filePath => {
  return fs.promises.readFile(filePath).then(buffer => {
    let data = JSON.parse(buffer)

    return convert(data)
  })
}

function convert(data) {
  if (data.types.includes('glossary')) {
    let frontMatter = Object.assign({}, data)

    delete frontMatter.shortDefinition
    delete frontMatter.longDefinition

    let content =
      (data.shortDefinition ? data.shortDefinition + '\n' : '') +
      (data.longDefinition ? data.longDefinition : '')

    return renderMarkdown(mapFrontMatter(frontMatter), content)
  }
  return undefined
}

/**
 * @param { Object[] } frontMatter
 * @param { String } content
 */
function renderMarkdown(frontMatter, content) {
  let template = `${yaml.stringify(frontMatter)}---\n${content}`
  return template
}
