import styled from "styled-components";

export const QuestionNo1 = () =>{

  return(
    <QuestionTop>
      <div className="question-number">
        <p>・・・</p>
        <p>3/5</p>
      </div>
      <div className="question">
        <p>1.今はどんな気分？</p>
        <ul>
          <a href="https://www.google.com"><li className="a-answer">A.わくわく、うきうき</li></a>
          <a href="https://www.google.com"><li className="b-answer">B.不安、落ち込み気味</li></a>
        </ul>
      </div>
    </QuestionTop>
  );
};

const QuestionTop = styled.div`
  font-size: 1.6rem;
  text-align: center;
  background: rgba(255,255,255,0.8);
  width: 700px;
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
    ul{
      width: 80%;
      li{
        padding: 3%;
      }
      .a-answer{
        background-color: antiquewhite;
      }
      .b-answer{
        background-color: mediumaquamarine;
      }
    }
  }
  `;
