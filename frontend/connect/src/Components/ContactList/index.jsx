import { useContext } from "react"
import { ContactsContext } from "../../providers/ContactsContext"
import { StyledList, StyledText } from "./StyledContactList.js";
import { CardContact } from "./CardContact/index.jsx";

export const ContactList = () => {
    const { contactsList } = useContext(ContactsContext)

    return (
        <>
            {contactsList.length > 0 ? (
                <StyledList>
                    <CardContact />
                </StyledList>
            ) : (
                <StyledText className="emptyList">Você ainda não cadastrou nenhum contato</StyledText>
            )}
        </>
    )
}