import axios from 'axios'
import { allUsers, userByID } from 'src/constants/endpoints'

export const getUser = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(allUsers())
      .then((res) => {
        resolve({ status: 'success', data: res.data })
      })
      .catch((err) => {
        reject({ status: err.response?.status, message: err.response?.statusText })
      })
  })
}

export const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(userByID(id))
      .then((res) => {
        resolve({ status: 'success', data: res.data })
      })
      .catch((err) => {
        reject({ status: err.response?.status, message: err.response?.statusText })
      })
  })
}
