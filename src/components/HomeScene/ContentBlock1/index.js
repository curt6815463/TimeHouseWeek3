import React, { Component } from 'react';
import ContentBlock1 from './styled-components'
import Container from '@/common/style-components/Container'
class HomeScene extends Component {
  render() {
    return (
      <ContentBlock1>
        <div className="col-4">
          <div className="panel">
            <div className="panel-title">
              <i class="fas fa-dollar-sign"></i>
              <span className="panel-wording">
                TOTAL REVENUE
              </span>
            </div>
            <div className="panel-number">
              94,879,487
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="panel">
            <div className="panel-title">
              <i class="fas fa-dollar-sign"></i>
              <span className="panel-wording">
                TOTAL REVENUE
              </span>
            </div>
            <div className="panel-number"></div>
          </div>
        </div>
        <div className="col-4">
          <div className="panel">
            <div className="panel-title">
              <i class="fas fa-dollar-sign"></i>
              <span className="panel-wording">
                TOTAL REVENUE
              </span>
            </div>
            <div className="panel-number"></div>
          </div>
        </div>
      </ContentBlock1>
    );
  }
}

export default HomeScene;
