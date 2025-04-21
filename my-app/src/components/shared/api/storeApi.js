import axiosInstance from "./axiosInstance"

export const getCatalogItems = async () => {
  return await axiosInstance.get('/products')
}

export const getProductById = async (id) => {
  return await axiosInstance.get(`/products/${id}`)
}