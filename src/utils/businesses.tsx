import api from './api'

export const getBusinesses = async () => {
  const request = await api('/businesses', 'GET', { undefined })

  const response = await request.json()

  return response
}

export const getBusinessDetail = async (id: string) => {
  const request = await api(`/businesses/${id}`, 'GET', { undefined })

  const response = await request.json()

  return await response
}
