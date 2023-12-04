import styled from "styled-components";

export const StyledCreateForm = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0;
    padding: 2.625rem 1.375rem;
    width: 100%;
    height: max-content;
    background-color: #f8f9fa;
    border-radius: 4px;

    input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 13.0293px;
        gap: 8.14px;

        width: 100%;
        height: 2.1rem;

        background: #f8f9fa;

        border: 1px solid #868e96ff;
        border-radius: 3.20867px;
    }

    input::placeholder {
        
        font-style: normal;
        font-weight: 400;
        font-size: 16.2426px;
        line-height: 26px;

        color: #121214;
    }

    input:focus {
        ::placeholder {
            font-style: normal;
            font-weight: 400;
            font-size: 16.2426px;
            line-height: 26px;
            color:#121214;
        }
        color:#121214;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        font-weight: 500;
        font-size: 0.9rem;
        line-height: 0px;
        color: #121214;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: #121214;
    }

    .errorWarn {
        color: #e83f5b;
    }

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;

        width: 100%;
        height: 38.5px;

        background:var( --colorColorPrimary);
        border: 1.2182px solid var( --colorColorPrimary);
        border-radius: 4.06066px;

        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;

        color: #FFFFFF;
    }

    button:hover {
        background:var(--colorColorPrimaryDisable);
        border: 1.2182px solid var(--colorColorPrimaryDisable);
    }

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;
        text-decoration: none;

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

    button:hover {
        background: #fcd700;
        border: 1.2182px solid #fcd700
    }
`