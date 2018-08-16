import React, { Component } from 'react';
import ContentBlock3Component from './styled-components'
import Container from '@/common/style-components/Container'
class ContentBlock1 extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <ContentBlock3Component>
        <div className="col-6">
          <div className="container">
            <div className="title">
              Transaction Website
            </div>
            <div className="twList">
              <i class="fab fa-facebook-square"></i>
              <div className="name">
                Facebook.com
              </div>
              <div className="number">
                45,836
              </div>
              <i class="fas fa-arrow-up"></i>
              <i class="fas fa-arrow-down"></i>
              <div className="index">
                20%
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="container">
            <div className="title">
              Latest Orders
            </div>
            <div className="loList">
              <div className="loImg"></div>
              <div className="loContent">
                <div className="loTitle">
                  Vintage T-shirt
                </div>
                <div className="datetime-field">
                  <i class="fas fa-clock"></i>
                  <span className="date"></span>
                  <span className="time"></span>
                </div>
                <div className="human-field">
                  <i class="fas fa-male"></i>
                  <span className="human-name"></span>
                </div>
              </div>
              <div className="total">
                <div className="total-wording"></div>
                <div className="total-number"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>asldkfjaskldf</div> */}
      </ContentBlock3Component>
    );
  }
}

export default ContentBlock1;
