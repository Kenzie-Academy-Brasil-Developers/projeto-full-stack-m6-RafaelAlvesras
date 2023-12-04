import styled from "styled-components";

export const StyledCreateModal = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    
    .modal {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        padding: 0;

        width: 90%;
        max-width: 29.25rem;
        height: 27.6875rem;

        background-color: white;

        border: 1px solid #F5F5F5;
        border-radius:12px;

        form {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 100%;
        }

        .headerModalCreate {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-top: 0%.5rem;
            width: 90%;
            height: 1.5rem;
        }

        .closeBtn {
            display: flex;
            width: 1.5rem;
            height: 1.5rem;
            background-color: #f8f9fa;
            border: none;
            font-size: 1.5rem;
        }
    }
`