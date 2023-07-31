import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

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
        
    :root {
        --gray-black: #000000;
        --gray-900: #191919;
        --gray-800: #333333;
        --gray-700: #4C4C4C;
        --gray-600: #666666;
        --gray-500: #7F7F7F;
        --gray-400: #999999;
        --gray-300: #B2B2B2;
        --gray-200: #CCCCCC;
        --gray-100: #E5E5E5;
        --gray-50: #F6F6F6;
        --gray-10: #FAFAFA;
        --gray-white: #FFFFFF;

        --blue-500:#2E90FA;
        --blue-200:#B2DDFF;

        --red-500:#F04438;

        --yellow-500:#F8D706;

        --brown-600:#2F1B1A;
    }
`
export default GlobalStyle
