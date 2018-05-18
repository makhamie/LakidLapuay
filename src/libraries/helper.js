import { Message } from 'element-ui'

export function getAuth () {
  let auth = localStorage.getItem('user_auth')
  // auth = JSON.parse(auth)
  return auth
}

export async function setAuth (data) {
  await localStorage.setItem('user_auth', data.token)
}

export async function clearAuth () {
  await localStorage.clear()
}

export function messageAlert (message, type = 'success') {
  Message({
    showClose: true,
    message: message,
    type: type,
    center: true
  })
}
export function notificationAlert (message, type = 'error', onClickFunction, duration = 4000) {
  Notification({
    title: type,
    message: message,
    type: type,
    duration: duration,
    onClick: onClickFunction
  })
}
