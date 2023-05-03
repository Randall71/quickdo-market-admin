import api from './api'

export const getServices = async () => {
  const request = await api('/services', 'GET', { undefined })

  const response = await request.json()

  return response
}

export const getServiceDetail = async (id: string) => {
  const request = await api(`/services/${id}`, 'GET', { undefined })

  const response = await request.json()

  return await response
}
