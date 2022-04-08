import React from "react";
import {Header} from "./Content/Header";
import {Content} from "./Content/Content";
import {Footer} from "./Content/Footer";
import {createGlobalStyle} from "styled-components";


export const App = () => {
  return(
    <>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  #root {
    font-family: 'Noto Sans JP', sans-serif;
  }
  #root li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #666;
  }
  img{
    width: 100%;
  }

`;
