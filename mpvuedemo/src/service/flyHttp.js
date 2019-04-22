import Fly from 'flyio/dist/npm/fly'
import qs from 'qs'
import md5 from 'js-md5'
import Vue from 'vue'
const app = new Vue()
const fly = new Fly()

//  添加拦截器
// fly.interceptors.request.use((config,promise)=>{
//     //给所有请求添加自定义header
//     config.headers["X-Tag"]="flyio";
//     return config;
// })

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    if (response.data.code === 110) {
      wx.login({
        success (res) {
          if (res.code) {
            app.$router.push({ path: '/pages/login/index', query: { code: res.code } })
          }
        }
      })
      return response
    }
    return response
  })

//  配置请求基地址
// fly.config.baseURL = 'https://testshopapi.maiguoer.com/'
fly.config.baseURL = 'http://192.168.1.238:85/'

export const signData = (action, data) => {
  let timestamp = Date.parse(new Date()) / 1000
  let uuid = timestamp.toString() + parseInt(Math.random() * 1000)
  let uid = wx.getStorageSync('uid') || ''
  let token = wx.getStorageSync('token') || ''
  let md5Str = ''
  let params = {
    clientType: 4,
    lang: 0,
    network: 0,
    timestamp: timestamp,
    token: token,
    uid: uid,
    uuid: uuid,
    version: '1.0.0'
  }

  for (let i in params) {
    if (md5Str === '') {
      md5Str += i + '=' + params[i]
    } else {
      md5Str += '&' + i + '=' + params[i]
    }
  }

  md5Str += '&action=' + action
  console.log('md5Str:', md5Str)
  Object.assign(params, { sign: md5(md5Str), action: action }, data)

  return params
}

export const post = function (url, data = {}, msg) {
  let newData = signData(url, data)

  if (msg !== '') {
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: msg
    })
  }

  return new Promise((resolve, reject) => {
    fly
      .post(url, qs.stringify(newData, {
        arrayFormat: 'brackets'
      }))
      .then(response => {
        resolve([null, response.data])
      })
      .catch(err => {
        resolve([err, null])
      })
      .then(() => {
        if (msg !== '') {
          wx.showNavigationBarLoading()
          wx.showLoading({
            title: msg
          })
        }
      })
  })
}

export const get = (url, data = {}, msg) => {
  console.log('data:', data)
  let newData = signData(url, data)
  if (msg !== '') {
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: msg
    })
  }
  return new Promise((resolve, reject) => {
    fly
      .get(url, newData)
      .then(response => {
        resolve([null, response.data])
      })
      .catch(err => {
        resolve([err, null])
      })
      .then(() => {
        if (msg !== '') {
          wx.showNavigationBarLoading()
          wx.showLoading({
            title: msg
          })
        }
      })
  })
}

export const request = (url, data = {}, option) => {
  let newData = signData(url, data)
  if (option.msg) {
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: option.msg
    })
  }
  return new Promise((resolve, reject) => {
    fly
      .request(option.baseUrl + url, newData, {
        method: option.method || 'get',
        timeout: option.timeout || 5000
      })
      .then(response => {
        resolve([null, response.data])
      })
      .catch(err => {
        resolve([err, null])
      })
      .then(() => {
        console.log('finally')
        if (option.msg) {
          wx.hideNavigationBarLoading()
          wx.hideLoading()
        }
      })
  })
}
