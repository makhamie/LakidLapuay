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
