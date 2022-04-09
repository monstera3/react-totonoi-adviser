import styled from "styled-components";

export const QuestionStart = (props) =>{

  return(
    <QuestionStartStyle>
      <div>
        <div className="title">totonoi</div>
        <div className="catch-copy">自律神経を整える</div>
      </div>
      <button onClick={props.onClick}>診断 START</button>
    </QuestionStartStyle>
  );
};

const QuestionStartStyle = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .title{
    color: white;
  }
  .catch-copy{
    font-size: 2rem;
  }
  button{
    padding:3% 10%;
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
