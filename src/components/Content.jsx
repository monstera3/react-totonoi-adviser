import styled from "styled-components";
import heroImg from "../assets/images/hero.png"
import question1Img from "../assets/images/question1.png"
import {useState} from "react";
import {Question} from "./content/Question";
import {QuestionStart} from "./content/QuestionStart";
import {Result} from "./content/Result";

export const Content = () =>{
  console.log("Content")

  const [process,setProcess] = useState('not_started'); // 'in_progress', 'finished'
  const [question,setQuestion] = useState(0); // 1, 2, 3
  const [answer,setAnswer] = useState([]); // ['a', 'b', 'c', 'a']

  const startQuestion = () => {
    setProcess( 'in_progress');
    setQuestion(1);
    console.log("startQuestion")
  };

  return(
    <div>
      <ContentStyle backgroundImg={ContentImg(process)}>
        {ContentBody(process,startQuestion)}
      </ContentStyle>
      <Result />
    </div>
  );
};


const ContentImg = (process) => {
  console.log("ContentImg")
  switch (process) {
    case "not_started":
      return heroImg;
    case "in_progress":
      return question1Img;
    default:
      return null;
  }
}

const ContentBody = (process, startQuestion) =>{
  console.log("ContentBody")
  switch (process) {
    case "not_started":
      return (<QuestionStart onClick={startQuestion} />)
    case "in_progress":
      return (<Question />)
    case "finished":
      return (<Result />)
    default:
      return null;
  }
};

const ContentStyle =  styled.div`
  background: url(${props => props.backgroundImg}) no-repeat top /cover;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
