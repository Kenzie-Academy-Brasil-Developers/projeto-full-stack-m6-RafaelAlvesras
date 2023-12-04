import styled from "styled-components";

export const StyledContacCard = styled.li`
    display: flex;

    align-items: center;
    justify-content: space-between;
    width: 19.25rem;
    height: 9rem;
    border-radius: 12px;
    padding: 1rem;

    background-color: #868e96ff;

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
        justify-content: center;
        gap: 1.5rem;
        height: 100%;
        width: 20%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        height: max-content;
    }
`