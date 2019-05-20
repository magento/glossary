const defaultErrorHandler = response => {
  console.log('Request failed with status: ' + response.status)
}

const fetchJsonData = (
  publicUrl,
  successCallback,
  errorCallback = defaultErrorHandler
) => {
  fetch(publicUrl)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        errorCallback(response)
      }
    })
    .then(successCallback)
}

export default fetchJsonData
