import styled from "styled-components";

export const Question = () =>{

  return(
    <QuestionTop>
      <div className="question-number">
        <p>・・・</p>
        <p>3/5</p>
      </div>
      <div className="question">
        <p>1.今はどんな気分？</p>

        <button className="a-answer">A.わくわく、うきうき</button>
        <button className="b-answer">B.不安、落ち込み気味</button>

        {/*<ul>*/}
        {/*  <li className="a-answer"><button >A.わくわく、うきうき</button></li>*/}
        {/*  <li className="b-answer"><button >B.不安、落ち込み気味</button></li>*/}
        {/*/!*</ul>*!/*/}
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
      width: 80%;
      margin-top: 5%;
      padding: 2%;
    }
    .a-answer{
      background-color: antiquewhite;
    }
    .b-answer{
      background-color: mediumaquamarine;
    }
  }
  `;