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
              <div className="date">
                <span className="startTime wording">
                  2018/6/6
                </span>
                <span className="split-icon">
                  <i class="fas fa-caret-right"></i>
                </span>
                <span className="endTime wording">
                  2018/6/10
                </span>
              </div>
              <div className="util wording">
                <span className="selected-value">
                  Weekly
                </span>
                <div className="dropdown">
                  <div>Daily</div>
                  <div>Weekly</div>
                  <div>Monthly</div>
                  <div>Yearly</div>
                  <div>Custom</div>
                </div>
                <span className="split-icon">
                  <i class="fas fa-caret-right"></i>
                </span>
              </div>
            </div>
          </div>

        </Container>
      </HomeComponent>
    );
  }
}

export default HomeScene;
