import { FormRegister } from "../../Components/FormRegister/index.jsx"
import { Header } from "../../Components/Header/index.jsx"
import { Footer } from "../../Components/Footer/index.jsx"

export const RegisterPage = () => {

    return (
        <>
            <Header />
            <main>
                <FormRegister />
            </main>
            <Footer />
        </>
    )
}