import { createContext, useEffect, useState } from "react";
import { api } from "../services/api.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [clientInfos, setClientInfos] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const loginClient = async (formData) => {
    try {
      setIsLoading(true);
      const { data } = await api.post("/login", formData);
      toast.success("Bem vindo !", { autoClose: 1000, className: "custom-toast" })
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USER", JSON.stringify(data.client));
      setClientInfos(data.client);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch {
      toast.error("Email ou senha inválidos", {
        autoClose: 2850,
        className: "custom-toast",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const client = localStorage.getItem("@USER");
    const clientObject = JSON.parse(client);
    if (client) {
      setClientInfos(clientObject);
      navigate("/dashboard")
    }
  }, []);

  const registerClient = async (formData) => {
    try {
      setIsLoading(true);
      const response = await api.post("/clients", formData);
      response;
      console.log(response)
      toast.success("Conta criada com sucesso !", {
        autoClose: 1000,
        className: "custom-toast",
      });
      setTimeout(() => {
        navigate("/");
      }, 900);
    } catch {
      toast.error("Ops! Algo deu errado", {
        autoClose: 1850,
        className: "custom-toast",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logoutClient = async () => {
    setIsLoading(true);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER");
    setTimeout(() => {
      setClientInfos({});
      setIsLoading(false);
      navigate("/");
      toast.warning("Logout realizado com sucesso.", {
        autoClose: 900,
        className: "custom-toast",
      });
    }, 1000);
  };

  return (
    <UserContext.Provider value={{ clientInfos, loginClient, registerClient, logoutClient }}>
      {children}
    </UserContext.Provider>
  );
};