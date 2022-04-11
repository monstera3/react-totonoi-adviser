import styled from "styled-components";
import heroImg from "../assets/images/hero.png"
import question1Img from "../assets/images/question1.png"
import {useState} from "react";
import {Question} from "./content/Question";
import {QuestionStart} from "./content/QuestionStart";
import {Result} from "./content/Result";

export const Content = () =>{
  console.log("Content")

  // TODO: 4. 複数の問題に対応する
  // - QUESTION_TOTAL_COUNTを3などに設定する
  // - QUESTION_LISTを作成する
  // -> (イメージ)
  // const QUESTION_LIST = [
  //   {question: 'aaa', options: [{ A: 'わくわく、うきうき' }, { B: '不安、落ち込み気味' }] },
  //   {question: 'aaa', options: [{ A: 'わくわく、うきうき' }, { B: '不安、落ち込み気味' }] },
  // ]
  // - Questionコンポーネントのpropsにquestionを渡す
  // - Questionコンポーネントでprops.questionから受け取ったquestionを表示する
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
    console.log("answerQuestion")
    // NOTE: ユーザーの回答をanswerHistoryに追加
    setAnswerHistory([...answerHistory, newAnswer]);
    // NOTE: 質問番号を次に進める
    setCurrentQuestionNumber(prevState => {
      if (prevState === QUESTION_TOTAL_COUNT) { // NOTE: 最後の質問に到達した場合
        setProcess('finished');
        return 0;
      } else { // NOTE: まだ質問が残っている場合
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

  const resultText = () => {
  //  TODO: 1. answerHistoryの内容によって結果の文章を返す
  //  hint:
  //  - switch文を使う
  //  - titleとbodyを返す
  //  - イメージ -> return { title: '「座っている時間」をできるだけ短くする', body: '説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト' }

  //  TODO: 3. 文章のパターンを12ヶ月分用意して回答した月によってだし分ける
  }

  const ContentBody = () =>{
    console.log("ContentBody")
    switch (process) {
      case "not_started":
        return (<QuestionStart startQuestion={startQuestion} />)
      case "in_progress":
        return (<Question answerQuestion={answerQuestion} />)
      case "finished":
        return (<Result text={resultText}/>)
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
