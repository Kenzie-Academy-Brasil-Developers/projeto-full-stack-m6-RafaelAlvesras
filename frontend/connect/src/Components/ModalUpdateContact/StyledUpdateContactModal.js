import styled from "styled-components";

export const StyledUpdateModal = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    
    .modal {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0;

        width: 90%;
        max-width: 29.25rem;
        height: 27.6875rem;

        background-color: white;

        border: 1px solid #F5F5F5;
        border-radius:12px;
    }
`