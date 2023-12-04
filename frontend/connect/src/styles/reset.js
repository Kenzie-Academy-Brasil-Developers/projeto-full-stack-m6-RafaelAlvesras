import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
     *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
     }

     button {
        cursor: pointer;
     }

     ul,ol {
        list-style: none;
     }

    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;     
      font-family: 'Inter', sans-serif;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100vw;
      max-width: 1200px;
      height: 100%;
    }

    #root {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;