import React from "react";
import {Header} from "./components/Header";
import {Content} from "./components/Content";
import {Footer} from "./components/Footer";
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
    color: #666;
    
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
