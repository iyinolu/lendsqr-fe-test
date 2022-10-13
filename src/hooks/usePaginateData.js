import { useState, useEffect, useCallback } from 'react'

export const usePaginateDate = (data, pageSize) => {
  const [dataObject, setDataObject] = useState({})

  useEffect(() => {
    let _length = data.length
    let _division = Math.floor(_length / pageSize)
    let _dataObject = {}
    let _divisionPointer = 0

    // Manually stratify mock data into pages
    for (let i = 0; i < _division; i++) {
      if (i === _division - 1) {
        _dataObject[i + 1] = data.slice(_divisionPointer)
      } else {
        _dataObject[i + 1] = data.slice(_divisionPointer, _divisionPointer + pageSize)
        _divisionPointer = _divisionPointer + pageSize
      }
    }
    setDataObject(_dataObject)
  }, [data, pageSize])

  const getPageData = useCallback(
    (page) => {
      return dataObject[page] ?? []
    },
    [dataObject],
  )

  return [dataObject, getPageData]
}
