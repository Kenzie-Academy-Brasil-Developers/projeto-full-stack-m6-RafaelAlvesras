import { useContext } from "react";
import { Header } from "../../Components/Header/index.jsx";
import { Footer } from "../../Components/Footer/index.jsx";
import { UserContext } from "../../providers/UserContext.jsx";
import { ContactList } from "../../Components/ContactList/index.jsx";
import { CardUser } from "../../Components/CardUser/index.jsx";
import { StyledMain } from "./StyledDashboard.js";

export const DashboardPage = () => {
    const { logoutClient } = useContext(UserContext);
   ;

    return (
        <>
            <Header>
                <button onClick={() => logoutClient()}>sair</button>
            </Header>
            <StyledMain>
                <CardUser />
                <div>
                    <ContactList />
                </div>
            </StyledMain>
            <Footer />
        </>
    );
};