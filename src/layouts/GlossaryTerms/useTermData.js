/*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe. 
*/

import { useState, useEffect } from 'react'

const useTermData = publicUrl => {
  const [data, setData] = useState(undefined)

  function fetchJsonData(publicUrl) {
    fetch(publicUrl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.log('Error fetching: ' + publicUrl)
        console.log(error)
      })
  }

  useEffect(() => {
    if (data === undefined) {
      fetchJsonData(publicUrl)
    }
  })

  return data
}

export default useTermData
