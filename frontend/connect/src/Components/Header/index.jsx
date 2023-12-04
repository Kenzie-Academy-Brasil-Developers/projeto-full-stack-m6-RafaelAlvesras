import { StyledHeader } from "./StyledHeader"

export const Header = ({ children }) => {

    return (
        <StyledHeader>
            <div className="container">
                <h1 className="logo">CONNECT</h1>
                {children}
            </div>
        </StyledHeader>
    )
}