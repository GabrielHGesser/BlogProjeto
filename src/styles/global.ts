import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Blinker";
}

body {
  background-color: #1A1A1A;
  color: #D9D9D9;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #F2F2F2;
}


p {
  color: #808080;
}

`;
