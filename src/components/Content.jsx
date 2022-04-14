import styled from "styled-components";
import heroImg from "../assets/images/hero.png"
import question1Img from "../assets/images/question1.png"
import {useState} from "react";
import {Question} from "./content/Question";
import {QuestionStart} from "./content/QuestionStart";
import {Result} from "./content/Result";

export const Content = () =>{
  console.log("Content")

  // NOTE:1 進行状況によって背景とコンポーネントをかえる
  // NOTE:2 スタートボタンクリックで次の画面に切り替わる
  // NOTE:3 AorBをクリックしたら結果画面に切り替わる
  // NOTE:4
  // NOTE:5
  // NOTE:6
  // NOTE:7

  // process: 進行状況
  // not_started: 初期画面, in_progress: 診断中, finished: 診断結果
  const [process,setProcess] = useState('not_started')
  // NOTE: currentQuestionNumber: 現在の質問番号
  const [currentQuestionNumber,setCurrentQuestionNumber] = useState(0); // 1, 2, 3
  const QUESTION_TOTAL_COUNT = 1;
  const [answer,setAnswer] = useState([]); // ['a', 'b', 'c', 'a']


  const ContentBody = (process,startQuestion) => {
    console.log("ContentBody")
    switch (process){
      case "not_started":
        return(<QuestionStart startQuestion={startQuestion}/>)
      case "in_progress":
        return (<Question
          answerQuestion={answerQuestion}
        />)
      case ("finished"):
        return (<Result/>)
      default:
        return null;
    }
  };

  const ContentImg = (process) => {
    console.log("ContentImg")
    switch (process){
      case "not_started":
        return(heroImg)
      case "in_progress":
        return (question1Img)
      case ("finished"):
        return null;
      default:
        return null;
    }
  }
  //スタートボタンクリック後
  const startQuestion = () => {
    setProcess('in_progress');
    setCurrentQuestionNumber(1);
    console.log("startQuestion")
  };

  //A or Bをクリック
  const answerQuestion = (newAnswer) => {
    setAnswer([...answer, newAnswer]);
    setCurrentQuestionNumber(prevState => {
      if(prevState === QUESTION_TOTAL_COUNT){
        setProcess('finished');
        return 0;
      } else{
        return prevState + 1;
      }
    });
  }





  return(
    <div>
      <ContentStyle backgroundImg={ContentImg(process)}>
        {ContentBody(process,startQuestion)}
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
