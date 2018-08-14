import styled from 'styled-components';

const ContentBlock1 = styled.div`
  display: flex;
  margin-top: 2rem;
  .col-4{
    width: 32%;
    text-align: center;
    .panel{
      background-color: #fff;
      .panel-title{
        padding-top: 3rem;
        color: #000;
        font-size: 1rem;
        font-weight: bold;
        .panel-wording{
          margin-left: 0.5rem;
        }
      }
      .panel-number{
        font-size: 2rem;
        font-weight: bold;
        padding-top: 1rem;
        padding-bottom: 3rem;
      }
    }
  }
  .col-4:nth-child(-n + 2){
    margin-right: 2%;
  }
`;

export default ContentBlock1
