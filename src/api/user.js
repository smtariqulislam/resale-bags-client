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

export const getAllUsers = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users`)
  console.log("test");
  const users = await response.json();

  return users;
};

export const getRole = async (email) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${email}`);

  const user = await response.json();

  return user?.role;
};



//


export const makeSeller = async (user) => {
  delete user._id;
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
       
      },
      body: JSON.stringify({ ...user, role: "seller" }),
    }
  );
  const users = await response.json();

  return users;
};