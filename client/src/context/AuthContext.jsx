import { createContext, useCallback, useState } from "react";
import { postRequest, baseUrl } from "../services/UsersSerivce";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerInfor, setRegisterInfor] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const updateRegisterInfor = useCallback((infor) => {
    setRegisterInfor(infor);
  }, []);

  const registerUser = useCallback(async () => {
    try {
      setIsRegisterLoading(true);
      const response = await postRequest(
        `${baseUrl}/users/register`,
        JSON.stringify(registerInfor)
      );

      console.log(response);

      if (response.error) {
        setIsRegisterLoading(false);
        return setRegisterError(response.message);
      }

      localStorage.setItem("user", JSON.stringify(response));

      setUser(response);
      setIsRegisterLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfor,
        updateRegisterInfor,
        registerUser,
        registerError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
