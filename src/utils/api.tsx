import AsyncStorage from '@react-native-async-storage/async-storage'

let userData: any
export const API_URL = 'http://dev.q-bb.ca/qam_apii/api'
const applicationKey = 'MRZGFPLYPXMETWJBTV2Z84AR'

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user')
    if (jsonValue !== null) {
      userData = JSON.parse(jsonValue)
    } else {
      return null
    }
  } catch (e) {}
}

getData()

export default async function api(
  path: string,
  method: string,
  body: any = null,
) {
  const formBody = Object.keys(body)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key]))
    .join('&')

  return fetch(`${API_URL}${path}`, {
    method,
    headers: {
      Accept: '*/*',
      'application-key': applicationKey,
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + userData.token,
    },
    body: method !== 'POST' ? undefined : formBody,
  })
}
