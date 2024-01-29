const baseApiUrl = `http://127.0.0.1:5000/api/users/`;

// login user
export const loginUser = async (data) => {
  try {
    const response = await fetch(baseApiUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

//register user
export const registerUser = async (data) => {
  try {
    const response = await fetch(baseApiUrl + "register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Check response status directly
      const errorData = await response.json(); // Parse error response
      const message = errorData?.message ?? response.statusText; // Prioritize error message
      return { error: true, message }; // Return structured error object
    }

    const results = await response.json();
    return results; // Return successful registration data
  } catch (error) {
    console.error(error); // Log error for debugging
    throw error; // Re-throw for higher-level handling
  }
};
