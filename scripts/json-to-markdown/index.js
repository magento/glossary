const convert = require('./converter')
const path = require('path')
const fs = require('fs')

const config = {
  targetDirectory: path.join(__dirname, '..', '..', 'src/terms'),
  outputDirectory: path.join(__dirname, '..', '..', 'src/_converted'),
}

processDirectory(config.targetDirectory)

function processDirectory(directoryPath) {
  fs.promises
    .readdir(directoryPath, {
      withFileTypes: true,
    })
    .then(files => {
      files.forEach(file => {
        const fullFilePath = path.join(directoryPath, file.name)
        if (file.isFile() && path.extname(file.name) === '.json') {
          convertFile(fullFilePath)
            .then(result => {
              if (result) {
                fs.promises.writeFile(
                  path.join(
                    config.outputDirectory,
                    path.basename(file.name, '.json') + '.md'
                  ),
                  result
                )
              }
            })
            .catch(error => {
              console.log(error)
            })
        }
      })
    })
}

function convertFile(filePath) {
  return convert(filePath)
}
