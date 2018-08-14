import styled from 'styled-components';

const TopBarComponent = styled.div`
  background-color: #000;
  color: #fff;
  .brand{
    font-size: 1.5rem;
    width:20%;
    box-sizing: border-box;
    font-weight: 600;
  }
  .navbar{
    width: 60%;
      a{
        line-height: 5rem;
        display: inline-block;
        padding: 0 1rem;
        position: relative;
        color: #919ba4;
      }
      .active{
        color: #fff;
      }
      .active::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 3px;
        background-color: white;
      }
  }
  .admin{
    text-align: right;
    width: 20%;
  }

`;

export default TopBarComponent
