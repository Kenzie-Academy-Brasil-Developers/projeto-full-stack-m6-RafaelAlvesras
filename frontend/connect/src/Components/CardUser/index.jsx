import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledSection } from "./StyledSection";
import { ContactsContext } from "../../providers/ContactsContext.jsx";
import { ModalCreateContact } from "../ModalCreateContact/index.jsx";

export const CardUser = () => {
    const { clientInfos } = useContext(UserContext);
    const {
        isOpenModalCreate,
        setIsOpenModalCreate
    } = useContext(ContactsContext)

    return (
        <StyledSection>
            <div className="userInfosBox">
                <h1>Olá, {clientInfos.fullName} !</h1>
                <div className="Userinfos">
                    <p>email:{clientInfos.email}</p>
                    <p>Telefone: {clientInfos.phoneNumber}</p>
                </div>
            </div>
            <div>
                <button onClick={() => setIsOpenModalCreate(true)}>
                    Adicionar novo contato
                </button>
                {isOpenModalCreate ? <ModalCreateContact /> : null}
            </div>
        </StyledSection>
    )
}