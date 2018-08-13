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
            <ul>
              <li>HOME</li>
              <li>ORDERS</li>
              <li>PRODUCT</li>
            </ul>
          </div>
          <div className='admin'>
            ADMIN
          </div>
        </Container>


      </TopBarComponent>
    );
  }
}

export default TopBar;
