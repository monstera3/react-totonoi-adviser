import styled from "styled-components";
import logoImg from "../assets/images/logo.png"

export const Header = () =>{
  return(
    <HeaderTop>
      <div className="header">
        <img src={logoImg} alt=""/>
        <ul>
          <li>totonoiについて</li>
          <li>お問い合わせ</li>
        </ul>
      </div>
    </HeaderTop>
  );
};

const HeaderTop = styled.div`
  max-width: 1440px;
  margin: 0 auto;
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
    }
  }
  
`;
