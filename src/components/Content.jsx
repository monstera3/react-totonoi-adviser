import styled from "styled-components";
import heroImg from "../assets/images/hero.png"
import question1Img from "../assets/images/question1.png"
import {useState} from "react";
import {Question} from "./content/Question";
import {QuestionStart} from "./content/QuestionStart";
import {Result} from "./content/Result";

export const Content = () =>{
  console.log("Content")

  const QUESTION_COUNT = 1;
  const [process,setProcess] = useState('not_started'); // 'in_progress', 'finished'
  const [question,setQuestion] = useState(0); // 1, 2, 3
  const [answer,setAnswer] = useState([]); // ['a', 'b', 'c', 'a']

  const startQuestion = () => {
    setProcess( 'in_progress');
    setQuestion(1);
    console.log("startQuestion")
  };

  const answerQuestion = (newAnswer) => {
    setAnswer([...answer, newAnswer]);
    setQuestion(prevState => {
      if (prevState === QUESTION_COUNT) {
        setProcess('finished');
        return 0;
      } else {
        return prevState + 1;
      }
    });
  }

  const ContentImg = () => {
    console.log("ContentImg")
    switch (process) {
      case "not_started":
        return heroImg;
      case "in_progress":
        return question1Img;
      case "finished":
        return null;
      default:
        return null;
    }
  }

  const ContentBody = () =>{
    console.log("ContentBody")
    switch (process) {
      case "not_started":
        return (<QuestionStart onClick={startQuestion} />)
      case "in_progress":
        return (<Question answerQuestion={answerQuestion} />)
      case "finished":
        return (<Result />)
      default:
        return null;
    }
  };

  return(
    <div>
      <ContentStyle backgroundImg={ContentImg()}>
        {ContentBody()}
      </ContentStyle>
    </div>
  );
};


const ContentStyle =  styled.div`
  background: url(${props => props.backgroundImg}) no-repeat top /cover;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
