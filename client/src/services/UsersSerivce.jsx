const baseApiUrl = `http://127.0.0.1:5000/api/users/`;

// login user
export const loginUser = async (data) => {
  try {
    const response = await fetch(baseApiUrl + "login", {
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

//register user
export const registerUser = async (data) => {
  try {
    const response = await fetch(baseApiUrl + "register", {
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
