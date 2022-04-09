import styled from "styled-components";

export const QuestionStart = (props) =>{

  return(
    <QuestionStartStyle>
      <button onClick={props.onClick}>診断 START</button>
    </QuestionStartStyle>
  );
};

const QuestionStartStyle = styled.div`

`;
