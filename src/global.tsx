import { createGlobalStyle } from "styled-components"
import { ThemeType } from "./components"

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html, body {
    margin: 0;
    padding: 0;
        font-family: 'Poppins', sans-serif;

    scroll-behavior: smooth;

  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.background};
    color: ${({ theme }) => theme.text};
    text-rendering: optimizeLegibility;
  }
  h1 , h2{
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    color: rgb(44, 0, 117);
  }

  h1 {
        font-weight: 300;
    font-size: 60px;
    line-height: 75px;
    margin: 0px 0px 38px;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  small {
    display: block;
  }
  a {
    text-decoration: none;
    font-family: 'Josefin Sans', sans-serif;
    box-shadow: none;
  }

  p{
        font-size: 16px;
    font-weight: 300;
    margin: 0px 0px 70px;
        font-family: 'Poppins', sans-serif;

  }

  footer {
        text-decoration: none;
    font-family: 'Poppins', sans-serif;
    box-shadow: none;
  }

  ul{
    margin: 0;
    text-align: justify;
    padding-inline-start: 10px;
    > li {
      padding: 5px 0;
    }
  }

  input{
    outline: none;
    font-family: 'Lato';
  }

  textarea,
  button {
    border-radius: 8px;
    outline: none;
    border: 1px solid transparent;
    padding: 0.5em 1.5em;
    background: ${({ theme }) => theme.colors.yellow};
    font-size: 16px;
    margin: 5px;
    width: 100%;
    color: ${({ theme }) => theme.text}
    border-radius: 50px;
    width: auto;
        font-family: 'Poppins', sans-serif;

  }

  button {
    &:hover {
          cursor: pointer;

      background: ${({ theme }) => theme.colors.yellow}99;
    }  
  }

  * clears the 'X' from Internet Explorer */
input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

/* clears the 'X' from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }

input:-webkit-autofill { 
    -webkit-background-clip: text;
}
`
