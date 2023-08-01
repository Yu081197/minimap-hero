import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    style{
    display: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        background-color: #010A13;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1440px;
        height: 1024px;
        background-color: var(--gray-50);
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
        
`;
export default GlobalStyle;
