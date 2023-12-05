import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    padding:1rem 7rem 1rem 7rem;
    margin-top: 2rem;
    gap: 2rem ;
    width: 100%;
    max-width: 1200px;
    height: 10rem;
    border-radius: 12px;
    
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    background-color: #f8f9fa;
    color: black;
  
    .addNewContactBtn {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 1rem;
        width: 7rem;
        height: 7rem;
        text-align: center;
        background-color: #ffd700;
        color: #000;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        transition: background-color 0.3s;
        font-size: 1.25rem;
        font-weight: 500;
    }

    .addNewContactBtn:hover {
        border-left: none;
        border: none;
        background-color: #000;
        color: #ffd700;
    }

    .userInfosBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        height: 100%;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        height: 11rem;
        padding:0;
        padding-bottom: 1rem;

        .addNewContactBtn {
            width: 5rem;
            height: 5rem;
            font-weight: 400;
            font-size: 0.75rem;
        }
    }
`;