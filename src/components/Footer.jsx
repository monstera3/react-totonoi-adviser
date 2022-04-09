import styled from "styled-components";
import logoImg from "../assets/images/logo.png"

export const Footer = () =>{
  return(
    <FooterTop>
      <div className="info">
        <a className="f-logo" href="https://www.google.com"><img src={logoImg} alt="" /></a>
        <nav>
          <ul >
            <li className="fnav-li"><a href="https://www.google.com">プライバシーポリシー</a></li>
            <li className="fnav-li"><a href="https://www.google.com">利用規約</a></li>
          </ul>
        </nav>
      </div>
      <div className="copy">
        <p><small>&copy;2022 S Co.,Ltd. All Rights Reserved.</small></p>
      </div>
    </FooterTop>
  );
};

const FooterTop = styled.div`
  .info{
    display: flex;
    justify-content: space-between;
    img{
      width: 80px;
      height: 80px;
    }
    ul{
      display: flex;
      justify-content: space-between;
      padding: 20px 100px 20px 0;
      li{
        padding-left: 30px;
      }
    }
  }
  .copy{
    text-align: center;
    background-color: darkgray;
  }
  
  
`;
