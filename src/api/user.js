// 
export const sellerRequest = async (user) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
    },
      body: JSON.stringify(user),
    }
  );
  const data = await response.json();
//   console.log(data);
  return data;
};

//

export const getRole = async (email) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${email}`);

  const user = await response.json();

  return user?.role;
};