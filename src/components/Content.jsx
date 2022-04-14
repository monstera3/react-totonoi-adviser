import styled from "styled-components";
import heroImg from "../assets/images/hero.png"
import question1Img from "../assets/images/question1.png"
import {useState} from "react";
import {Question} from "./content/Question";
import {QuestionStart} from "./content/QuestionStart";
import {Result} from "./content/Result";
import {RESULT_TEXTS} from "./content/RESULT_TEXTS";

export const Content = () =>{
  // NOTE:1 進行状況によって背景とコンポーネントをかえる
  // NOTE:2 スタートボタンクリックで次の画面に切り替わる
  // NOTE:3 AorBをクリックしたら結果画面に切り替わる
  // NOTE:4 質問内容が変わり3問目で結果に切り替わる
  // NOTE:5 選んだ回答によって答えが変わる
  // NOTE:6 結果を12ヶ月分用意する
  // NOTE:7

  // process: 進行状況
  // not_started: 初期画面, in_progress: 診断中, finished: 診断結果
  const [process,setProcess] = useState('not_started')
  // NOTE: currentQuestionNumber: 現在の質問番号
  const [currentQuestionNumber,setCurrentQuestionNumber] = useState(0); // 1, 2, 3
  const QUESTION_TOTAL_COUNT = 3;
  const [answerHistory,setAnswerHistory] = useState([]); // ['A', 'B', 'A', 'A']

  const QUESTION_LIST = [
    {title: 'どんな気分？', options: ['わくわく、明るい気持ち', '不安、落ち込み気味'] },
    {title: '天気は？', options: ['晴れ', '曇り、雨'] },
    {title: '休日の過ごし方は？', options: ['外に出かけるアウトドア派', '家の中で過ごすインドア派'] },
  ]
  const RESULT_TEXTS = {
    AAA: { title: '「座っている時間」をできるだけ短くする', body: '説明テキスト' },
    AAB: { title: '「座っている時間」をできるだけ短くするB', body: '説明テキストB' },
    ABA: { title: 'ABA title', body: 'ABA body' },
    ABB: { title: 'ABB title', body: 'ABB body' },
    BAA: { title: 'BAA title', body: 'BAA body' },
    BAB: { title: 'BAB title', body: 'BAB body' },
    BBA: { title: 'BBA title', body: 'BBA body' },
    BBB: { title: 'BBB title', body: 'BBB body' },
  }


  const ContentBody = () => {
    switch (process){
      case "not_started":
        return(<QuestionStart startQuestion={startQuestion}/>)
      case "in_progress":
        const questionIndex = currentQuestionNumber-1;
        const question = QUESTION_LIST[questionIndex];
        return (<Question
          answerQuestion={answerQuestion}
          question={question}
        />)
      case ("finished"):
        return (<Result resultText={resultText()} />)
      default:
        return null;
    }
  };

  const ContentImg = () => {
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
    // NOTE: ユーザーの回答をanswerHistoryに追加
    setAnswerHistory([...answerHistory, newAnswer]);
    // NOTE: 質問番号を次に進める
    setCurrentQuestionNumber(prevState => {
      if(prevState === QUESTION_TOTAL_COUNT){
        setProcess('finished');
        return 0;
      } else{
        return prevState + 1;
      }
    });
  }

  //回答によって答えが変わる
  const resultText = () => {
    //  NOTE: answerHistoryの内容によって結果の文章を返す
    const answerHistoryString = answerHistory.join('');
    const currentMonthIndex = new Date().getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthName = monthNames[currentMonthIndex];
    const result = RESULT_TEXTS[currentMonthName][answerHistoryString]
    return{ title: result.title, body: result.body };
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
