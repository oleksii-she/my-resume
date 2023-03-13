import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


  body {
    max-width: 100vw;
  overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-color: #FFF;
color: #070707;
  }

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
h1,h2,h3{
  color: #070707;
  font-weight: 700;
}

  li{
    list-style: none;
  }

  a {
  color: inherit;
  text-decoration: none;
}

p{
  font-size: 14px;
line-height: calc(14/22);
@media (min-width: 767.98px) {
  font-size: 16px;
line-height: calc(16/22);
}

color: #070707;
}


`;
