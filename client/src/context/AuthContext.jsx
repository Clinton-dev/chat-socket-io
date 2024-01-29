import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Clints" });
  const [registerInfor, setRegisterInfor] = useState({
    email: "",
    password: "",
    name: "",
  });

  console.log(registerInfor);

  const updateRegisterInfor = useCallback((infor) => {
    setRegisterInfor(infor);
  }, []);

  return (
    <AuthContext.Provider value={{ user, registerInfor, updateRegisterInfor }}>
      {children}
    </AuthContext.Provider>
  );
};
