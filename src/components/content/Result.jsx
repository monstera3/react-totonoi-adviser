import styled from "styled-components";
import resultImg from "../../assets/images/resultImg.png"

export const Result = () =>{
  console.log("Result")
  return(
    <ResultStyle>
      <div className="result-content">
        <h2>today’s   totonoi   point</h2>
        <div className="text-content">
          {/* TODO: props.textからtitleとbodyを取得して表示する */}
          <h3>「座っている時間」を<br/>
            できるだけ短くする</h3>
          <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>

        </div>
        {/*<img src={resultImg} alt=""/>*/}
      </div>

    </ResultStyle>
  );
};

const ResultStyle = styled.div`
  background: #f8f8f8;
  height: 700px;
  .result-content{
    display: grid;
    grid-template-columns: 400px 500px;
    justify-content: center;
    padding: 8% 3%;
    h2{
      font-size: 13px ;
    }
    .text-content{
      background: white;
      margin-top: 100px;
      padding: 0 100px 135px;
      h3{
        font-size: 24px;
      }
    }
    //img{
    //  width: 500px;
    //}
  }
`;
