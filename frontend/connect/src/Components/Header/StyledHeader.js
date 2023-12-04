import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: max-content;
  min-height: 7rem;
  background-color: #000;
  color: #ffd700;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: 100%;
  }

  .logo {
    color: #000; 
    text-align: center;
    padding: 20px;
    background-color: #ffd700; 
    margin: 0;
    border-radius: 50%;
    }

    button {
      display: flex;
        align-items: center;
        justify-content: center;

        width: 3rem;
        height: 1.5rem;
        background-color: #ffd700;
        color: #000;

        border: none;
        border-radius: 12%;
        font-weight: 700;
        transition: background-color 0.3s;
    }

    button:hover {
      background-color: #000;
        color: #ffd700;
        border: 1px solid #ffd700;
        border-radius: 12%;
    }
`;