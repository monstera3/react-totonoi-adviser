import styled from "styled-components";
import heroImg from "../assets/images/hero.png"
import question1Img from "../assets/images/question1.png"
import {useState} from "react";
import {QuestionNo1} from "./content/QuestionNo1";
import {QuestionStart} from "./content/QuestionStart";

export const Content = () =>{

  const [questionFlag, setQuestionFlag] = useState(true);

  const onClickSwitchQuestionFlag = () => {
    setQuestionFlag( prevState => !prevState);
  };

  return(
    <div>
      <ContentStyle backgroundImg={ContentImg(questionFlag)}>
        {questionFlag
          ? <QuestionStart onClick={onClickSwitchQuestionFlag} />
          : <QuestionNo1 />
        }
      </ContentStyle>
    </div>
  );
};

const ContentImg = (questionFlag) => {
  switch (questionFlag) {
    case true:
      return heroImg;
    case false:
      return question1Img;
    default:
      return null;
  }
}

const ContentStyle =  styled.div`
  background: url(${props => props.backgroundImg}) no-repeat center /cover;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
