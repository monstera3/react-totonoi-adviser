import styled from "styled-components";
import heroImg from "../assets/images/hero.png"
import question1Img from "../assets/images/question1.png"
import {useState} from "react";
import {Question} from "./content/Question";
import {QuestionStart} from "./content/QuestionStart";
import {Result} from "./content/Result";

export const Content = () =>{
  console.log("Content")

  // NOTE: process: 進行状況
  // not_started: 初期画面, in_progress: 診断中, finished: 診断結果
  const [process,setProcess] = useState('not_started')

  const ContentBody = () => {
    console.log("ContentBody")
    switch (process){
      case "not_started":
        return(<QuestionStart />)
      case "in_progress":
        return (<Question/>)
      case ("finished"):
        return (<Result/>)
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
