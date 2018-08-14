import styled from 'styled-components';

const HomeComponent = styled.div`
  .content-title{
    display: flex;
    margin-top: 3rem;
    width: 100%;
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

export default HomeComponent
