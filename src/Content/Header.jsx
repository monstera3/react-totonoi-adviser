
import logoImg from "../assets/images/logo.png"

export const Header = () =>{
  return(
    <div>
      <div className="header">
        <img src={logoImg} alt=""/>
        <ul>
          <li>totonoiについて</li>
          <li>お問い合わせ</li>
        </ul>
      </div>
    </div>
  );
};

