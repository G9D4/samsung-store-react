import { createGlobalStyle } from "styled-components";

const GlobalStyles=createGlobalStyle`
:root {
    * {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    body {
        height: 100vh;
        margin: 0;
    }

    .full-width {
        width: 100%;
    }

    input, select {
        padding: 8px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
}
`;

export default GlobalStyles;