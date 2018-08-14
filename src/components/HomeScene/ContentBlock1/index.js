import React, { Component } from 'react';
import ContentBlock1Component from './styled-components'
import Container from '@/common/style-components/Container'
class ContentBlock1 extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <ContentBlock1Component>
        {
          this.props.panelInfo.map((panel, index) => {
            return (
              <div className="col-4">
                <div className="panel">
                  <div className="panel-title">
                    <i class={panel.icon}></i>
                    <span className="panel-wording">
                      {panel.wording}
                    </span>
                  </div>
                  <div style={panel.style} className="panel-number">
                    {panel.number}
                  </div>
                </div>
              </div>
            )
          })
        }
      </ContentBlock1Component>
    );
  }
}

export default ContentBlock1;
