import api from './api'

export const getUsers = async () => {
  const request = await api('/users', 'GET', { undefined })

  const response = await request.json()

  return response
}
