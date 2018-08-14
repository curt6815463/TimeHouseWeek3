import React, { Component } from 'react';
import Container from '@/common/style-components/Container'
import ContentTitle from './ContentTitle'
import ContentBlock1 from './ContentBlock1'


class HomeScene extends Component {
  render() {
    return (
      <div>
        <Container>
          <ContentTitle />
          <ContentBlock1 />
        </Container>
      </div>
    );
  }
}

export default HomeScene;
