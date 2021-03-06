import styled from "styled-components";

export const Question = (props) =>{
  console.log("Question")
  return(
    <QuestionTop>
      <div className="question-number">
        {/* TODO: 6 ・・・を動的に変化させる */}
        <p>・・・</p>
        {/* NOTE: 5 3/5 を動的に変化させる */}
        <p>{props.currentNumber}/{props.totalCount}</p>
      </div>
      <div className="question">
        <p>{props.question.title}</p>
        {/*質問１.{props.question.title}はcontentの91行目にとぶ？*/}
        {/* <Question hoge={aaaa}> のように定義するとQuestionコンポーネントの内部で {props.hoge} として取得できる */}
        {/*質問２.↓の['A']はどういう意味？*/}
        {/* QUESTION_LIST の構造をシンプルに変えて不要にしました */}
        <button onClick={() => props.answerQuestion('A')} className="a-answer">A.  {props.question.options[0]}</button>
        <button onClick={() => props.answerQuestion('B')} className="b-answer">B.  {props.question.options[1]}</button>
      </div>
    </QuestionTop>
  );
};

const QuestionTop = styled.div`
  font-size: 1.6rem;
  text-align: center;
  background: rgba(255,255,255,0.8);
  width: 700px;
  height: 50%;
  margin-top: 20%;
  .question-number{
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .question {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    button{
      color: white;
      width: 80%;
      margin-top: 5%;
      padding: 2%;
    }
    .a-answer{
      background-color: #D6BCBB;
    }
    .b-answer{
      background-color: #66AFAB;
    }
  }
  `;
