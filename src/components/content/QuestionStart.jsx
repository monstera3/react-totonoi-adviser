import styled from "styled-components";

export const QuestionStart = (props) =>{

  return(
    <QuestionStartStyle>
      <p className="title">totonoi</p>
      <p className="catch-copy">自律神経を整える</p>
      <button onClick={props.onClick}>診断 START</button>
    </QuestionStartStyle>
  );
};

const QuestionStartStyle = styled.div`
  text-align: center;
  .title{
    color: white;
  }
  .catch-copy{
    font-size: 2rem;
  }
  button{
    padding:1% 3%;
    color: #666;
    background-color: white;
    font-size: 24px;
    border-radius: 50px;
    border:none;
    :hover{
      background-color: #666;
      color: white;
      cursor: pointer;
    }
  }
`;
