import styled from "styled-components";
import hereImg from "../assets/images/hero.png"
import {useState} from "react";
import {QuestionNo1} from "./content/QuestionNo1";
import {QuestionStart} from "./content/QuestionStart";

export const Content = () =>{

  const [questionFlag, setQuestionFlag] = useState(true);

  const onClickSwitchQuestionFlag = () => {
    setQuestionFlag( prevState => !prevState);
  };

  const ContentTopAndButton = () => {
    return (
      <ContentTop>
        <QuestionStart onClick={onClickSwitchQuestionFlag} />
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
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  button{
    padding:1% 3%;
    color: #666;
    background-color: white;
    font-size: 24px;
    border-radius: 50px;
    border:none;
    :hover{
     background-color: #666; 
      color: white;
      cursor: pointer;
    }
  }
`;
