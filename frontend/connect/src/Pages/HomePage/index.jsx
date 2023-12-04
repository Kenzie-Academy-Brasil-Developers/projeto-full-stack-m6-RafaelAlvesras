import { Header } from "../../Components/Header/index.jsx"
import { Footer } from "../../Components/Footer/index.jsx"
import { FormLogin } from "../../Components/FormLogin/index.jsx"
import { StyledMain } from "./StyledHomePage.js"

export const HomePage = () => {

    return (
        <>
            <Header />
            <StyledMain>
                <section>
                    <h3>Controle total, conexões perfeitas!</h3>
                </section>
                <FormLogin />
            </StyledMain>
            <Footer />
        </>
    )
}