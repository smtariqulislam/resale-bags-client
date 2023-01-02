
// Add a product
export const addProduct = async (productdata) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/product`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(productdata),
  });

  const data = await response.json();
  return data;
};




// Get All bookings for admin
export const getAllBookings = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/booking`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    
    },
  })
  const bookings = await response.json()
  return bookings
}



// Delete a booking
export const deleteBooking = async id => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/booking/${id}`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
      },
    }
  )

  const data = await response.json()
  return data
}


