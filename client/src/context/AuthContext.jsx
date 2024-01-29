import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerInfor, setRegisterInfor] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoadin, setIsRegisterLoading] = useState(false);

  console.log(registerInfor);

  const updateRegisterInfor = useCallback((infor) => {
    setRegisterInfor(infor);
  }, []);

  const signupUser = useCallback(async () => {
    const response = await registerUser(registerInfor);
    
  }, []);

  return (
    <AuthContext.Provider value={{ user, registerInfor, updateRegisterInfor }}>
      {children}
    </AuthContext.Provider>
  );
};
