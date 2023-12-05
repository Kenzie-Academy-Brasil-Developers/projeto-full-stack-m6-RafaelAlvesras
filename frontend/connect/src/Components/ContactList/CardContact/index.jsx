import { useContext } from "react"
import { ContactsContext } from "../../../providers/ContactsContext"
import { StyledContacCard } from "./StyledCardContact";
import logo from "../../../assets/connectIcon.png"


export const CardContact = () => {
    const { contactsList, setIsOpenModalUpdate, setHandleContact, deleteContact } = useContext(ContactsContext)

    const checkHandleContact = (contact) => {
        setIsOpenModalUpdate(true);
        setHandleContact(contact);
    };

    return (
        <>
            {contactsList.map((e) => (
                <StyledContacCard key={e.id}>
                    <div className="divInfosContact">
                        <h3>{e.nickName}</h3>
                        <span>{e.fullName}</span>
                        <p>{e.phoneNumber}</p>
                        <p>{e.email}</p>
                    </div>
                    <div className="divButtonsLogo">
                        <img src={logo} alt="Logo Connect amarela em formaco circular com a letra 'C' e a letra 'O' em preto" />
                        <div className="divButtons">
                            <button onClick={() => checkHandleContact(e)}>editar</button>
                            <button onClick={() => deleteContact(e.id)} >excluir</button>
                        </div>
                    </div>
                </StyledContacCard>
            ))}
        </>
    )
}