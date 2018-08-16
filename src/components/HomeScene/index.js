import React, {Component} from 'react';
import Container from '@/common/style-components/Container'
import ContentTitle from './ContentTitle'
import ContentBlock1 from './ContentBlock1'
import ContentBlock2 from './ContentBlock2'
import ContentBlock3 from './ContentBlock3'

class HomeScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentBlock1PanelInfo: [
        {
          wording: 'TOTAL REVENUE',
          number: '123,334',
          icon: 'fas fa-dollar-sign',
          style: {
            color: '#82cf42'
          }
        }, {
          wording: 'TOTAL COST',
          number: '123,334',
          icon: 'fab fa-dropbox',
          style: {
            color: '#cc122b'
          }
        }, {
          wording: 'Net INCOME',
          number: '123,334',
          icon: 'fas fa-ticket-alt',
          style: {
            color: '#5094dc'
          }
        }
      ],
      ContentBlock2ChartInfo:{

      }
    }
  }
  render() {
    return (<div>
      <Container>
        <ContentTitle/>
        <ContentBlock1 panelInfo={this.state.contentBlock1PanelInfo}/>
        <ContentBlock2/>
        <ContentBlock3/>
      </Container>
    </div>);
  }
}

export default HomeScene;
