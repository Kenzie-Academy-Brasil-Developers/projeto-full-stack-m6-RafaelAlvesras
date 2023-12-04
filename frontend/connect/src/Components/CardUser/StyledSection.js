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
    
    background-color: #999;
    color: black;

    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 7rem;
        height: 7rem;
        text-align: center;
        background-color: #555;
        color: #fff;
        border: none;
        border-left: 1px solid #fff;
        border-radius: 12px;
        cursor: pointer;
        transition: background-color 0.3s;
        font-size: 1.25rem;
    }

    button:hover {
        border-left: none;
        border-right: 1px solid #fff;
        background-color: #666;
        color: #fff;
    }

    .userInfosBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
`;