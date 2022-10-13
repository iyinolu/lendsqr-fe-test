import { useState, useEffect, useCallback } from 'react'
import { getUser } from 'src/services/userService'

export const useAllUserData = () => {
  const [usersData, setUsersData] = useState([])

  const reloadData = useCallback(() => {
    getUser()
      .then((res) => {
        setUsersData(res.data)
        localStorage.setItem('lendsqr-data', JSON.stringify(res.data))
      })
      .catch((err) => {
        // TODO: log error
      })
  }, [])

  useEffect(() => {
    const cachedData = localStorage.getItem('lendsqr-data')
    if (cachedData) {
      setUsersData(JSON.parse(cachedData))
    } else {
      reloadData()
    }
  }, [reloadData])

  return [usersData, reloadData]
}
