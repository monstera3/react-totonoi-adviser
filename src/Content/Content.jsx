import styled from "styled-components";
import hereImg from "../assets/images/hero.png"

export const Content = () =>{
  return(
    <ContentTop>
      <img src={hereImg} alt=""/>
      <button>診断 START</button>
    </ContentTop>
  );
};

const ContentTop = styled.div`
  max-width: 1440px;
  max-height: 800px;
  margin: 0 auto;
  img{
    position: relative;
    width: 100%;
  }
  button{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin:0;
    padding:1% 3%;
    color: #666;
    background-color: white;
    font-size: 24px;
    border-radius: 50px;
    :hover{
     background-color: #666; 
      color: white;
      cursor: pointer;
    }
  }
`;
