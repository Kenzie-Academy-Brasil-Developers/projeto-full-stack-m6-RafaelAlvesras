import { useContext } from "react";
import { CreateContactForm } from "../FormCreateContact/index.jsx";
import { ContactsContext } from "../../providers/ContactsContext.jsx";
import { StyledCreateModal } from "../ModalUpdateContact/StyledUpdateContactModal.js";

export const ModalCreateContact = () => {

    const { setIsOpenModalCreate } = useContext(ContactsContext);

    return (
        <StyledCreateModal role="dialog">
            <div className="modal">
                <div>
                    <h3>Crie um novo contato</h3>
                    <button onClick={() => setIsOpenModalCreate(false)}>x</button>
                </div>
                <CreateContactForm />
            </div>
        </StyledCreateModal>
    );
};