
//get all products
export const getCatorgoryName = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/catorgory`)
  const data = await response.json()
  return data
}


//get all products
export const getAllProducts = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/product`)
  const data = await response.json()
  return data
}

//get filtered homes for seller homes chilo
export const getProducts = async email => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/product/${email}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
       
      },
    }
  )
  const data = await response.json()
  return data
}

// update a product [homes chilo]
export const updateProduct = async homeData => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/product`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
     
    },
    body: JSON.stringify(homeData),
  })

  const data = await response.json()
  return data
}

// Delete a Product
export const deleteProduct = async id => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    
    },
  })
  const result = await response.json()
  return result
}
