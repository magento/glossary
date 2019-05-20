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
