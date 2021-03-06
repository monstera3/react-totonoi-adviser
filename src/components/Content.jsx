import styled from "styled-components";
import heroImg from "../assets/images/hero.png"
import question1Img from "../assets/images/question1.png"
import {useState} from "react";
import {Question} from "./content/Question";
import {QuestionStart} from "./content/QuestionStart";
import {Result} from "./content/Result";
import {RESULT_TEXTS} from "./content/RESULT_TEXTS";

export const Content = () =>{
  console.log("Content")

  // NOTE: 3. 複数の問題に対応する
  // -[x] QUESTION_TOTAL_COUNTを3などに設定する
  // -[x] QUESTION_LISTを作成する
  // - [x] Questionコンポーネントのpropsにquestionを渡す
  // - [x] Questionコンポーネントでprops.questionから受け取ったquestionを表示する
  // - [x] answerHistoryに応じてResultをだし分ける
  const QUESTION_TOTAL_COUNT = 3;
  // NOTE: process: 進行状況
  // not_started: 初期画面, in_progress: 診断中, finished: 診断結果
  const [process,setProcess] = useState('not_started'); // 'in_progress', 'finished'
  // NOTE: currentQuestionNumber: 現在の質問番号
  const [currentQuestionNumber,setCurrentQuestionNumber] = useState(0); // 1, 2, 3
  // NOTE: answerHistory: ユーザーの回答履歴
  const [answerHistory,setAnswerHistory] = useState([]); // ['A', 'B', 'A', 'A']
  console.log(answerHistory)

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
      //  質問４.２問目にいくコードの流れが分からない。この後どこに飛ぶ？
      //  set~ 関数が呼ばれるとContentコンポーネントのreturnが再度実行され、
      //  Questionコンポーネントに渡されるquestionが次の問題になっている
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
        //質問５.ここに灰色の背景を入れたいけど画像じゃないとだめ？
        return null;
      default:
        return null;
    }
  }

  const resultText = () => {
    //  NOTE: answerHistoryの内容によって結果の文章を返す
    // NOTE: 文章のパターンを12ヶ月分用意して回答した月によってだし分ける
    console.log("resultText")
    console.log(answerHistory);
    // 質問６.ここ全体の流れが分からない
    const answerHistoryString = answerHistory.join('');
    const currentMonthIndex = new Date().getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthName = monthNames[currentMonthIndex];
    const result = RESULT_TEXTS[currentMonthName][answerHistoryString];
    return { title: result.title, body: result.body };

  //  NOTE: 4. 文章のパターンを12ヶ月分用意して回答した月によってだし分ける
  };

  const QUESTION_LIST = [
    {title: 'どんな気分？', options: ['わくわく、明るい気持ち', '不安、落ち込み気味'] },
    {title: '天気は？', options: ['晴れ', '曇り、雨'] },
    {title: '休日の過ごし方は？', options: ['外に出かけるアウトドア派', '家の中で過ごすインドア派'] },
  ]

  const ContentBody = () =>{
    console.log("ContentBody")
    switch (process) {
      case "not_started":
        return (<QuestionStart startQuestion={startQuestion} />)
      case "in_progress":
        const questionIndex = currentQuestionNumber-1;
        const question = QUESTION_LIST[questionIndex];
        return (
          <Question
            answerQuestion={answerQuestion}
            question={question}
            totalCount={QUESTION_TOTAL_COUNT}
            currentNumber={currentQuestionNumber}
          />
        )
      //質問３.currentQuestionNumberはどこを指している？
      //  const [currentQuestionNumber,setCurrentQuestionNumber] で定義したもの
      case "finished":
        return (<Result text={resultText()}/>)
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
