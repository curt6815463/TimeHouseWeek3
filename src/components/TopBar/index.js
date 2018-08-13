import React, { Component } from 'react';
import TopBarComponent from './styled-components'
import Container from '@/common/style-components/Container'
class TopBar extends Component {
  render() {
    return (
      <TopBarComponent>
        <Container>
          <div className='brand'>
            Shoptime
          </div>
          <div className='navbar'>
            <a className='active'>HOME</a>
            <a>ORDERS</a>
            <a>PRODUCT</a>
          </div>
          <div className='admin'>
            <span>ADMIN</span>
          </div>
        </Container>


      </TopBarComponent>
    );
  }
}

export default TopBar;
