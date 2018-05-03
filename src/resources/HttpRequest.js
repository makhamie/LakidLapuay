import axios from 'axios'
import {BASE_URL} from '../libraries/const'
import {getAuth} from '../libraries/helper'

let axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000
})

axiosInstance.interceptors.request.use(function (config) {
  console.log(getAuth().token)
  config.headers.common['Authorization'] = 'Bearer ' + getAuth().token
  config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}, function (error) {
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use(function (response) {
  if (parseInt(response.status) === 401) {
    window.location.href = BASE_URL
  } else {
    return response
  }
}, function (error) {
  return Promise.reject(error)
})

class HttpRequest {
  constructor () {
    this.axios = axios
  }
  setHeader (header) {
    axiosInstance.defaults.headers.common[header.key] = 'Bearer ' + header.value
    axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  }

  fetch (methodName, data) {
    return axiosInstance.get(methodName, {
      params: data
    })
  }

  create (methodName, data) {
    return axiosInstance.post(methodName, data)
  }

  update (methodName, data) {
    return axiosInstance.put(methodName, data)
  }

  delete (methodName, id) {
    return axiosInstance.delete(methodName, {params: {id: id}})
  }

  request (type, url, data) {
    let promise = null
    switch (type) {
      case 'GET': promise = axios.get(url, {params: data}); break
      case 'POST': promise = axios.post(url, data); break
      case 'PUT': promise = axios.put(url, data); break
      case 'DELETE': promise = axios.delete(url, data); break
      default : promise = axios.get(url, {params: data})
    }
    return promise
  }
}
export default HttpRequest
