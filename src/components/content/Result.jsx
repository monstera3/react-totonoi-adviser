import styled from "styled-components";
import resultImg from "../../assets/images/resultImg.png"

export const Result = (props) =>{
  console.log("Result")
  console.log(props)

  return(
    <ResultStyle>
      <div className="result-content">
        <h2>today’s   totonoi   point</h2>
        <div className="text-content">
          <div className="text-block">
            <h3 >{props.text.title}</h3>
            <p>{props.text.body}</p>
          </div>
          <div className="result-image">
            <img src={resultImg} alt=""/>
          </div>
        </div>

      </div>

    </ResultStyle>
  );
};

const ResultStyle = styled.div`
  background: #f8f8f8;
  height: 700px;
  width: 1200px;
  .result-content{
    display: grid;
    grid-template-columns: 400px 500px;
    justify-items: center;
    padding: 8% 3%;
    h2{
      font-size: 13px ;
    }
    .text-content{
      background: white;
      margin: 50px 100px 0 0;
      padding: 0 100px 200px;
      position: relative;
      .text-block{
        width: 100%;
        margin-top: 100px;
        line-height: 2;
      }
        h3{
          font-size: 24px;
        }
      }
      
      .result-image{
        position: absolute;
        bottom: 30px;
        left: -300px;
        max-width: 350px;
      }
  }
`;
