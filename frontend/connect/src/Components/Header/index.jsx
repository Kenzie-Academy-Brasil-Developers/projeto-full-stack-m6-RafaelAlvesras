import { StyledHeader } from "./StyledHeader"
import logo  from "../../assets/ConnectIcon.png"

export const Header = ({ children }) => {

    return (
        <StyledHeader>
            <div className="container">
                <div className="divLogo">
                    <img src={logo} alt="Logo Connect amarela em formaco circular com a letra 'C' e a letra 'O' em preto" />
                    <h1 className="logo">CONNECT</h1>
                </div>
                {children}
            </div>
        </StyledHeader>
    )
}