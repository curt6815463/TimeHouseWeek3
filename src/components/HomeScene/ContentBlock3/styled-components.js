import styled from 'styled-components';

const ContentBlock3 = styled.div`
  margin-top: 2rem;
  ::after{
    content: '';
    clear: both;
    display: block;
  }
  .col-6{
    width: 48%;
    float: left;
    .container{
      background-color: #fff;
      padding: 2rem 3rem;

      .title{
        color: #000;
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
  .col-6 + .col-6{
    margin-left: 4%;
  }
  .twList{

  }
  .loList{

  }

`;

export default ContentBlock3
