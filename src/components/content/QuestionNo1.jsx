import styled from "styled-components";

export const QuestionNo1 = () =>{

  return(
    <QuestionTop>
      <div className="question-content">
        <div className="question-number">
          <p>・・・</p>
          <p>3/5</p>
        </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  .question-number{
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .question-content{
    text-align: center;
    background: rgba(255,255,255,0.8);
    width: 700px;
   
    ul{
      li{
        //margin: 3% 18%;
        //padding: 1%;
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
