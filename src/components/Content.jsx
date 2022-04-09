import styled from "styled-components";
import hereImg from "../assets/images/hero.png"
import question1Img from "../assets/images/question1.png"
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
      <ContentStyle img={ContentImg(questionFlag)}>
        {questionFlag
          ? <QuestionStart onClick={onClickSwitchQuestionFlag} />
          : <QuestionNo1 />
        }
      </ContentStyle>
    )
  }

  return(
    <div>
      {ContentTopAndButton()}
    </div>

  );
};

const ContentImg = (questionFlag) => {
  switch (questionFlag) {
    case true:
      return hereImg;
    case false:
      return question1Img;
    default:
      return null;
  }
}

const ContentStyle =  styled.div`
  background: url(${props => props.img}) no-repeat center /cover;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
