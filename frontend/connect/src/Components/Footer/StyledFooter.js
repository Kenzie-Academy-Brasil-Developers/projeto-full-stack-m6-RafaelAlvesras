import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  justify-content: center;
  width: 100vw;
  height: 3rem;
  background-color: #000;

  .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    height: 100%;
    padding-right: 1rem;

    font-size: 0.8rem;
    color: #999;
  }
`;