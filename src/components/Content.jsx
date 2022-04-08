import styled from "styled-components";
import hereImg from "../assets/images/hero.png"
import {useState} from "react";
import {QuestionNo1} from "./content/QuestionNo1";

export const Content = () =>{

  const [questionFlag, setQuestionFlag] = useState(true);

  const onClickSwitchQuestionFlag = () => {
    setQuestionFlag( prevState => !prevState);
  };

  const ContentTopAndButton = () => {
    return (
      <ContentTop>
        <button onClick={onClickSwitchQuestionFlag}>診断 START</button>
      </ContentTop>
    )
  }

  return(
    <div>
      {questionFlag
        ? ContentTopAndButton()
        : <QuestionNo1 />
      }
    </div>

  );
};

const ContentTop = styled.div`
  background: url(${hereImg}) no-repeat center /cover;
  margin: 0 auto;
  position: relative;
  max-width: 1440px;
  min-height: 700px;
  z-index: 0;

  button{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding:1% 3%;
    color: #666;
    background-color: white;
    font-size: 24px;
    border-radius: 50px;
    border:none;
    z-index:1;
    :hover{
     background-color: #666; 
      color: white;
      cursor: pointer;
    }
  }
`;
