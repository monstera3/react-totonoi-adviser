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
  // NOTE:3
  // NOTE:4
  // NOTE:5
  // NOTE:6
  // NOTE:7

  // process: 進行状況
  // not_started: 初期画面, in_progress: 診断中, finished: 診断結果
  const [process,setProcess] = useState('not_started')

  const ContentBody = () => {
    console.log("ContentBody")
    switch (process){
      case "not_started":
        return(<QuestionStart startQuestion={startQuestion}/>)
      case "in_progress":
        return (<Question/>)
      case ("finished"):
        return (<Result/>)
      default:
        return null;
    }
  };

  const ContentImg = () => {
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
    console.log("startQuestion")
  };

  return(
    <div>
      <ContentStyle backgroundImg={ContentImg}>
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
