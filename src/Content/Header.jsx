import styled from "styled-components";
import logoImg from "../assets/images/logo.png"

export const Header = () =>{
  return(
    <HeaderTop>
      <div className="header">
        <img src={logoImg} alt=""/>
        <ul>
          <li><a href="https://www.google.com">totonoiについて</a></li>
          <li><a href="https://www.google.com">お問い合わせ</a></li>
        </ul>
      </div>
    </HeaderTop>
  );
};

const HeaderTop = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  //background-color: lightblue;
  .header{
    display: flex;
    justify-content: space-between;
    img{
      width: 80px;
      height: 80px;
    }
    ul{
      display: flex;
      justify-content: space-between;
      padding: 10px 50px;
      li{
        padding-left: 30px;
      }
    }
  }
  
`;
