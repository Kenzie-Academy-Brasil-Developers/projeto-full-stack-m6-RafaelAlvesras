import { useContext } from "react";
import { ContactsContext } from "../../providers/ContactsContext.jsx";
import { UpdateContactForm } from "../FormUpdateContact/index.jsx";

export const ModalUpdateContact = () => {

    const { setIsOpenModalUpdate } = useContext(ContactsContext);

    return (
        <div>
            <div>
                <div>
                    <h3>Atualize seu contato</h3>
                    <button onClick={() => setIsOpenModalUpdate(false)}>x</button>
                </div>
                <UpdateContactForm />
            </div>
        </div>
    );
};