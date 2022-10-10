import { useState, useEffect, useCallback } from 'react'
import { getUser } from 'src/services/userService'

export const useAllUserData = () => {
  const [usersData, setUsersData] = useState([])

  const reloadData = useCallback(() => {
    getUser()
      .then((res) => {
        setUsersData(res.data)
      })
      .catch((err) => {
        // TODO: log error
      })
  }, [])

  useEffect(() => {
    reloadData()
  }, [reloadData])

  return [usersData, reloadData]
}
