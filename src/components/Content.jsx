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
      <ContentStyle>
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

const ContentStyle = styled.div`
  background: url(${hereImg}) no-repeat center /cover;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
