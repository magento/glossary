/*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe. 
*/

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
