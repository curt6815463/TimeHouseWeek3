import React, { Component } from 'react';
import Container from '@/common/style-components/Container'
import ContentTitle from './ContentTitle'


class HomeScene extends Component {
  render() {
    return (
      <div>
        <Container>
          <ContentTitle />
        </Container>
      </div>
    );
  }
}

export default HomeScene;
