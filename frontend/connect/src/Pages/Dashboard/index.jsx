import { useContext } from "react";
import { Header } from "../../Components/Header/index.jsx";
import { Footer } from "../../Components/Footer/index.jsx";
import { UserContext } from "../../providers/UserContext.jsx";
import { ContactList } from "../../Components/ContactList/index.jsx";
import { CardUser } from "../../Components/CardUser/index.jsx";
import { StyledMain } from "./StyledDashboard.js";
import { ModalUpdateContact } from "../../Components/ModalUpdateContact/index.jsx"
import { ContactsContext } from "../../providers/ContactsContext.jsx";
import { ModalCreateContact } from "../../Components/ModalCreateContact/index.jsx";

export const DashboardPage = () => {
    const { logoutClient } = useContext(UserContext);
    const { isOpenModalUpdate, isOpenModalCreate } = useContext(ContactsContext);

    return (
        <>
            {isOpenModalUpdate ? <ModalUpdateContact /> : null}
            {isOpenModalCreate ? <ModalCreateContact /> : null}
            <Header>
                <button onClick={() => logoutClient()}>sair</button>
            </Header>
            <StyledMain>
                <CardUser />
                <ContactList />
            </StyledMain>
            <Footer />
        </>
    );
};