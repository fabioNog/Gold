  import axios from 'axios';

const URL = 'http://localhost:4000/api/user'

export function userSignupRequest(userData) {
  console.log('user data', userData)
  return dispatch => axios.post(URL, userData)
  // return dispatch => {
  //   axios.post(URL, userData)
  // }
}