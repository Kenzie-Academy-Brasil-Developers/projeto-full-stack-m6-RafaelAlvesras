import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    gap: 2.5rem;

    @media (max-width: 700px) {
        padding: 0;
        gap: 1.5rem;
    }
`