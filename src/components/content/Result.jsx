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
    justify-items: center;
    justify-content: space-around;
    grid-template-columns: 500px 500px;
    padding: 8% 3%;
    h2{
      font-size: 13px ;
    }
    .text-content{
      background: white;
      margin: 50px 100px 0 0;
      width: 550px;
      padding: 0 50px 100px 110px;
      position: relative;
      .text-block{
        width: 100%;
        margin-top: 100px;
        line-height: 2;
      }
        h3{
          font-size: 20px;
          margin-bottom: 50px;
        }
      p{
        font-size: 16px;
        line-height: 2.5;
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
