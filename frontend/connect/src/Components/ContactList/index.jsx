import { useContext } from "react"
import { ContactsContext } from "../../providers/ContactsContext"
import { ModalUpdateContact } from "../../Components/ModalUpdateContact/index.jsx";

export const ContactList = () => {
    const { contactsList, setIsOpenModalUpdate, setHandleContact, deleteContact } = useContext(ContactsContext)

    const checkHandleContact = (contact) => {
        setIsOpenModalUpdate(true);
        setHandleContact(contact);
    };

    return (
        <>
            {contactsList.length > 0 ? (
                <ul>
                    {isOpenModalUpdate ? <ModalUpdateContact /> : null}
                    {contactsList.map((e) => (
                        <li key={e.id}>
                            <div>
                                <h3>{e.nickName}</h3>
                                <span>{e.fullName}</span>
                                <p>{e.phoneNumber}</p>
                                <p>{e.email}</p>
                            </div>
                            <div>
                                <button onClick={() => checkHandleContact(e)}>editar</button>
                                <button onClick={() => deleteContact(e.id)} >excluir</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Você ainda não cadastrou nenhum contato</p>
            )}
        </>
    )
}