import { useContext } from "react";
import { ContactsContext } from "../../providers/ContactsContext.jsx";
import { UpdateContactForm } from "../FormUpdateContact/index.jsx";
import { StyledUpdateModal } from "./StyledUpdateContactModal.js";

export const ModalUpdateContact = () => {

    const { setIsOpenModalUpdate } = useContext(ContactsContext);

    return (
        <StyledUpdateModal role="dialog">
            <div className="modal">
                <div className="headerModalCreate">
                    <h3>Atualize seu contato</h3>
                    <button className="closeBtn" onClick={() => setIsOpenModalUpdate(false)}>x</button>
                </div>
                <UpdateContactForm />
            </div>
        </StyledUpdateModal>
    );
};