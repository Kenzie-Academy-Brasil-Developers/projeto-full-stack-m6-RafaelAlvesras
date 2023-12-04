import styled from "styled-components"

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.375rem;
    padding: 2.625rem 1.375rem;
    width: 95%;
    max-width: 369px;
    height: max-content;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 13.0293px;
        gap: 8.14px;

        width: 100%;
        height: 38.5px;

        background:#343b41;

        border: 0.9772px solid #343b41;
        border-radius: 3.20867px;
    }

    input::placeholder {
        
        font-style: normal;
        font-weight: 400;
        font-size: 16.2426px;
        line-height: 26px;

        color: #868e96ff;
    }

    input:focus {
        ::placeholder {
            font-style: normal;
            font-weight: 400;
            font-size: 16.2426px;
            line-height: 26px;
            color: #f8f9fa;
        }
        color: #f8f9fa;
    }

    label {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 0px;

        color:  #f8f9fa;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 22px;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 22px;
        color: #868e96ff;
    }

    .errorWarn {
        font-size: 0.75rem;
        color: #ffd700;
    }

    .link {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        padding: 0px 22.3336px;
        gap: 10.15px;

        width: 100%;
        height: 38.5px;

        background:  #fcc100;
        border: 1.2182px solid #fcc100;
        border-radius: 4.06066px;

        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;

        color: #000;
    }

    .link:hover {
        background: #fcd700;
        border: 1.2182px solid #59323f;
    }
`