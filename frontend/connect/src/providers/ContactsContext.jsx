import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ContactsContext = createContext({});

export const ContactsProvider = ({ children }) => {
  const [contactsList, setContactsList] = useState([]);
  const [handleContact, setHandleContact] = useState(null);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          const { data } = await api.get("/contacts", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          setContactsList(data);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchData();
  }, []);

  const createContact = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      response;
      toast.success("Contato criado com sucesso !", {
        autoClose: 1000,
        className: "custom-toast",
      });
    } catch {
      toast.error("Ops! Algo deu errado", {
        autoClose: 1850,
        className: "custom-toast",
      });
    } finally {
      setIsOpenModalCreate(false);
      window.location.reload();
    }
  };

  const updateContact = async (contactId, formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      
      await api.patch(`/contacts/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      toast.success("Contato atualizado !", { autoClose: 1400, className: "custom-toast" })
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado.", {
        autoClose: 2550,
        className: "custom-toast",
      });
    } finally {
      setIsOpenModalUpdate(false);
    }
  };

  const deleteContact = async (contactId) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${ token }`,
        },
  });
  toast.warning("Contato excluído com sucesso.", {
    autoClose: 900,
    className: "custom-toast",
  });
  setContactsList((contactsList) => contactsList.filter((contact) => contact.id !== contactId));
} catch (error) {
  console.log(error);
  toast.error("Ops, algo deu errado.", {
    autoClose: 2850,
    className: "custom-toast",
  });
}
  };

return (
  <ContactsContext.Provider
    value={{
      contactsList,
      createContact,
      isOpenModalCreate,
      setIsOpenModalCreate,
      isOpenModalUpdate,
      setIsOpenModalUpdate,
      updateContact,
      handleContact,
      setHandleContact,
      deleteContact
    }}
  >
    {children}
  </ContactsContext.Provider>
);
};