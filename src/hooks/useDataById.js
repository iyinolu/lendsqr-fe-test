import { useState, useEffect, useCallback } from 'react'
import { getUserById } from 'src/services/userService'

export const useDataById = (id) => {
  const [userData, setUserData] = useState([])

  const reloadData = useCallback(() => {
    getUserById(id)
      .then((res) => {
        setUserData(res.data)
      })
      .catch((err) => {
        // TODO: log error
      })
  }, [id])

  useEffect(() => {
    reloadData()
  }, [reloadData])

  return [userData, reloadData]
}
