import React, { Component } from 'react';
import HomeComponent from './styled-components'
import Container from '@/common/style-components/Container'
class HomeScene extends Component {
  render() {
    return (
      <HomeComponent>
        <Container>
          <div className="content-title">
            <div className="title-word">
              Overview
            </div>
            <div className="conditions">
              <div className="startTime wording">
                2018/6/6
              </div>
              <div className="split-icon">

              </div>
              <div className="endTime wording">
                2018/6/10
              </div>
              <div className="util wording">

              </div>
            </div>
          </div>

        </Container>
      </HomeComponent>
    );
  }
}

export default HomeScene;
