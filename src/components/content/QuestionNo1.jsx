
import styled from "styled-components";

export const QuestionNo1 = () =>{

  return(
    <QuestionTop>
      <p>Q.質問内容</p>
      <ul>
        <li>YES</li>
        <li>NO</li>
      </ul>

    </QuestionTop>
  );
};

const QuestionTop = styled.div`
  margin: 5% auto;
  `;
