export const findAll = async () => {
  const resp = await fetch('https://fakestoreapi.com/products')
  return await resp.json() // const data = await resp.json(); return data
}

export const findById = async (id) => {
  const resp = await fetch(`https://fakestoreapi.com/products/${id}`)
  return await resp.json()
}