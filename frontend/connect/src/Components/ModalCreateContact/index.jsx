import { useContext } from "react";
import { CreateContactForm } from "../FormCreateContact/index.jsx";
import { ContactsContext } from "../../providers/ContactsContext.jsx";

export const ModalCreateContact = () => {

    const { setIsOpenModalCreate } = useContext(ContactsContext);

    return (
        <div>
            <div>
                <div>
                    <h3>Crie um novo contato</h3>
                    <button onClick={() => setIsOpenModalCreate(false)}>x</button>
                </div>
                <CreateContactForm />
            </div>
        </div>
    );
};