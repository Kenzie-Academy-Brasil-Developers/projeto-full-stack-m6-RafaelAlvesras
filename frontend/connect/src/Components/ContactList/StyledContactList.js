import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;

    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    max-width: 1200px;
    border-radius: 12px;
    padding: 2rem 7rem 2rem 7rem;
    height: 400px;
    max-height: 400px;
    overflow: auto;
    background-color: #f8f9fa;

    flex-wrap: wrap;
    gap: 1rem;

    .emptyList{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const StyledText = styled.p`
    display: flex;
    font-size: 2rem;
    font-weight: 900;
`