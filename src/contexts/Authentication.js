import { useContext, createContext, useState, useEffect } from "react";

const AuthenticationContext = createContext();
export const useAuthentication = () => useContext(AuthenticationContext);

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
