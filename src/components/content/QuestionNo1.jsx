import question1Img from "../../assets/images/question1.png"
import styled from "styled-components";

export const QuestionNo1 = () =>{

  return(
    <QuestionTop>
      <div className="question-number">
        <p>・・・</p>
        <p>3/5</p>
      </div>
      <div className="question-image">
        <div className="question-content">
          <p>1.今はどんな気分？</p>
          <ul>
            <a href="https://www.google.com"><li className="a-answer">A.わくわく、うきうき</li></a>
              <a href="https://www.google.com"><li className="b-answer">B.不安、落ち込み気味</li></a>
          </ul>
        </div>
      </div>


    </QuestionTop>
  );
};

const QuestionTop = styled.div`
  margin: 0 auto;
  font-size: 1.7rem;
  max-width: 1440px;
  min-height: 700px;
  .question-number{
    display: flex;
    justify-content: space-between;
    
  }
  .question-image{
    background: url(${question1Img}) no-repeat center /cover;
    height: 950px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .question-content{
    text-align: center;
    background: rgba(255,255,255,0.8);
    width: 900px;
    height: 500px;
    p{
      margin: 3% 18%;
      padding: 4%;
      //background-color: lightblue;
    }
    ul{
      li{
        margin: 3% 18%;
        padding: 4%;
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
