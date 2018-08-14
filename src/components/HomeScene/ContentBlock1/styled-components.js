import styled from 'styled-components';

const ContentTitle = styled.div`
  width: 100%;  
  .content-title{
    display: flex;
    margin-top: 3rem;
    .title-word{
      width: 50%;
      font-size: 2rem;
      color: #000;
      font-weight: bold;
    }
    .conditions{
      width: 50%;
      text-align: right;
      .wording{
        color: #9b9b9b;
        font-weight: bold;
        cursor: pointer;
      }
      .date{
        margin-right: 1.5rem;
        span{
          padding-right: 0.5rem;
        }
      }

      .util{
        position: relative;
        .selected-value{
          padding-right: 0.5rem;
        }
        .dropdown{
          display: none;
          width: 6rem;
          position: absolute;
          top: 1.5rem;
          right: 0;
          text-align: center;
          background-color: #fff;
          box-shadow: 1px 2px 10px 0 #9B9B9B;
          div{
            padding: 0.6rem 0;
          }
          div:hover{
            background-color: #000;
            color: #fff;
          }
        }
      }
      .split-icon{
        color: #000;
      }
    }
    .conditions > *{
      display: inline-block;
      vertical-align: middle;

    }
    .conditions::after{
      content:'';
      width:0;
      height:100%;
      display:inline-block;
      vertical-align:middle;
    }
  }
`;

export default ContentTitle
