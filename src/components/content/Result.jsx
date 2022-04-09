import styled from "styled-components";
import resultImg from "../../assets/images/resultImg.png"

export const Result = () =>{
  console.log("Result")
  return(
    <ResultStyle>
      <div className="result-content">
        <h2>today’s   totonoi   point</h2>
        <div className="text-content">
          <h3>「座っている時間」を <br/>
            できるだけ短くする</h3>
          <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
        </div>
        <img src={resultImg} alt=""/>
      </div>

    </ResultStyle>
  );
};

const ResultStyle = styled.div`
  .result-content{
    
    
    .text-content{
      
    }
  }
  
`;
