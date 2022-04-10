import styled from "styled-components";
import heroImg from "../assets/images/hero.png"
import question1Img from "../assets/images/question1.png"
import {useState} from "react";
import {Question} from "./content/Question";
import {QuestionStart} from "./content/QuestionStart";
import {Result} from "./content/Result";

export const Content = () =>{
  console.log("Content")

  const QUESTION_TOTAL_COUNT = 1;
  // NOTE: process: 進行状況
  // not_started: 初期画面, in_progress: 診断中, finished: 診断結果
  const [process,setProcess] = useState('not_started'); // 'in_progress', 'finished'
  // NOTE: currentQuestionNumber: 現在の質問番号
  const [currentQuestionNumber,setCurrentQuestionNumber] = useState(0); // 1, 2, 3
  // NOTE: answerHistory: ユーザーの回答履歴
  const [answerHistory,setAnswerHistory] = useState([]); // ['A', 'B', 'A', 'A']

  const startQuestion = () => {
    setProcess( 'in_progress');
    setCurrentQuestionNumber(1);
    console.log("startQuestion")
  };

  const answerQuestion = (newAnswer) => {
    // NOTE: ユーザーの回答をanswerHistoryに追加
    setAnswerHistory([...answerHistory, newAnswer]);
    // NOTE: 質問番号を次に進める
    setCurrentQuestionNumber(prevState => {
      if (prevState === QUESTION_TOTAL_COUNT) {
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
        return (<QuestionStart startQuestion={startQuestion} />)
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
