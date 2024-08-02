// import { useState, useEffect } from "react";

// const useAuth = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Здесь нужно добавить логику для проверки аутентификации пользователя, например, проверка наличия токена
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const login = (token: string) => {
//     localStorage.setItem("authToken", token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   return {
//     isAuthenticated,
//     login,
//     logout,
//   };
// };

// export { useAuth };

import { useEffect } from "react";
import authStore from "../store/AuthStore";

const useAuth = () => {
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      authStore.isAuthenticated = true;
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("authToken", token);
    authStore.isAuthenticated = true;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    authStore.isAuthenticated = false;
  };

  return {
    isAuthenticated: authStore.isAuthenticated,
    login,
    logout,
  };
};

export { useAuth };
