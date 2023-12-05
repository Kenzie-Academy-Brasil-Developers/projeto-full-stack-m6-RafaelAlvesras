import styled from "styled-components";

export const StyledContacCard = styled.li`
    display: flex;

    align-items: center;
    justify-content: space-between;
    width: 19.25rem;
    height: 9rem;
    border-radius: 12px;
    padding: 1rem;

    border: 2px solid #868e96ff;
    background-color: #ffd700;

    .divInfosContact {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 80%;
    }

    .divButtons {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 1.5rem;
        height: 100%;
        width: 20%;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 3rem;
        height: 1.5rem;
        color: #ffd700;
        background-color: #000;

        border: none;
        border-radius: 4px;
        font-weight: 500;
        transition: background-color 0.3s;
    }

    button:hover {
        color: #000;
        background-color: #ffd700;
        border: 1px solid #000;
        border-radius: 12%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 90%;
        height: max-content;

        .divButtons {
            flex-direction: row;
            width: 100%;
        }

        button {
            width: 5rem;
        }
    }
`