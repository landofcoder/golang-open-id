import axios from 'axios'
import { getCookie, delCookie } from './cookie'

let API_LINK = window.location.protocol + "//" + process.env.REACT_APP_API_LINK

const api_fetch = (url = '') => {
  let headers = {
    'X-Requested-With': 'XMLHttpRequest'
  }
  const token = getCookie('_token')
  if (token) headers = Object.assign({ Authorization: `Bearer ${token}` }, headers)
  const api_axios = axios.create({
    baseURL: API_LINK + '/' + url,
    timeout: 90000,
    headers: headers
  })
  return api_axios
}

const api = (query, paginate, api_url = '') => {
  let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    "X-Page": _.get(paginate, 'page', 1),
    "X-Per-Page": _.get(paginate, 'perpage', -1),
    "X-Sort-By": _.get(paginate, 'sortby', 'created_at')
  }
  const token = getCookie('_token')
  if (token) headers = Object.assign({ Authorization: `Bearer ${token}` }, headers)

  const api_axios = axios.create({
    baseURL: API_LINK,
    timeout: 90000,
    headers: headers
  })

  api_axios.interceptors.response.use(function(res) {
    // Do something with response data
    if (res.data.errors && res.data.errors.length && res.data.errors[0].msg === 'Permission denied!') {
      console.log("Permission denied!")
    }
    return res
  }, handleError)
  return api_axios.post(api_url, {
    query
  })
}

function handleError(error) {
  console.log("Error: ", error)
  if (error.message === 'Network Error') {
    // The user doesn't have internet
    return Promise.reject(error)
  }
  if (!error.response) {
    return Promise.reject(error)
  }
  switch (error.response.status) {
    case 400:
      // Show 400 error page
      delCookie('_token')
      break
    case 401:
      // window.location.reload()
      break
    case 404:
      // Show 404 page
      break
    case 405:
      // Method Not Allowed
      break
    case 500:
      // Server Error redirect to 500
      break
    case 503:
      // Server Error redirect to 500
      break
    default:
      // Unknown Error
      break
  }
  return Promise.reject(error)
}

const apiAuth = (api_url = '', variables) => {
  let headers = {
    'X-Requested-With': 'XMLHttpRequest'
  }

  const token = getCookie('_token')
  if (token) headers = Object.assign({ Authorization: `Bearer ${token}` }, headers)

  const api_axios = axios.create({
    baseURL: API_LINK+'/auth',
    timeout: 90000,
    headers: headers
  })

  api_axios.interceptors.response.use(function(res) {
    // Do something with response data
    if (res.data.errors && res.data.errors.length) {
    }
    return res
  }, handleError)
  return api_axios.post(api_url, {
    token,
    ...variables
  })
}

export { api, api_fetch, apiAuth }
