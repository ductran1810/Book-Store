import { useState } from "react";
import { useHistory } from "react-router-dom";

function useAuth() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [isLogged, setIsLogged] = useState(!!user);
  const history = useHistory();

  const login = (email, password, username) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem("user", JSON.stringify({ email, username }));
        setUser({ email, username });
        setIsLogged(true);
        history.push("/account");
        res({ email, username });
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLogged(false);
    history.push("/auth/login");
  };

  return { isLogged, login, logout };
}

export default useAuth;
