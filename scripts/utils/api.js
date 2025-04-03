/**
 * @typedef {Object} ProductType
 * @property {number} id
 * @property {string} title	
 * @property {number} price
 * @property {string} description
 * @property {string} category
 * @property {string} image
 * @property {{rate:number, count: number}} rating
 *  
 */

/**
 * 
 * @returns {Promise<ProductType[]>}
 */

export const findAll = async () => {
  const resp = await fetch('https://fakestoreapi.com/products')
  return await resp.json() // const data = await resp.json(); return data
}

/**
 * 
 * @param {number} id 
 * @returns {Promise<ProductType>}
 */
export const findById = async (id) => {
  const resp = await fetch(`https://fakestoreapi.com/products/${id}`)
  return await resp.json()
}