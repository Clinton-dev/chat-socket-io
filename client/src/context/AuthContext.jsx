import { createContext, useCallback, useState, useEffect } from "react";
import { postRequest, baseUrl } from "../services/UsersSerivce";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerInfor, setRegisterInfor] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loginInfor, setLoginInfor] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    setUser(JSON.parse(user));
  }, []);

  const updateRegisterInfor = useCallback((infor) => {
    setRegisterInfor(infor);
  }, []);

  const updateLoginInfor = useCallback((infor) => {
    setLoginInfor(infor);
  }, []);

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsRegisterLoading(true);
        setRegisterError(null);
        const response = await postRequest(
          `${baseUrl}/users/register`,
          JSON.stringify(registerInfor)
        );

        setIsRegisterLoading(false);

        if (response.error) {
          return setRegisterError(response);
        }

        localStorage.setItem("user", JSON.stringify(response));

        setUser(response);
      } catch (error) {
        console.log(error);
      }
    },
    [registerInfor]
  );

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsLoginLoading(true);
        setLoginError(null);
        const response = await postRequest(
          `${baseUrl}/users/login`,
          JSON.stringify(loginInfor)
        );

        setIsLoginLoading(false);

        if (response.error) {
          return setLoginError(response);
        }

        localStorage.setItem("user", JSON.stringify(response));

        setUser(response);
      } catch (error) {
        console.log(error);
      }
    },
    [loginInfor]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfor,
        isRegisterLoading,
        updateRegisterInfor,
        registerUser,
        registerError,
        logoutUser,
        loginInfor,
        isLoginLoading,
        loginError,
        loginUser,
        updateLoginInfor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
