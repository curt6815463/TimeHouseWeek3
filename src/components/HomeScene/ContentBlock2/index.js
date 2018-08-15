import React, {Component} from 'react';
import ContentBlock2Component from './styled-components'
import Container from '@/common/style-components/Container'
import Chart from 'chart.js'
class ContentBlock2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style:{
        position: 'relative',
        width:'100%',
        height:'360px',
      }
    }
  }

  componentDidMount() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange"
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [
              12,
              19,
              3,
              5,
              2,
              3
            ],
            borderWidth: 1,
            fill:false,
            borderColor:'rgba(0, 0, 0, 1)',
            // cubicInterpolationMode:'monotone'
            lineTension:0
          },
          {
            label: '# of Votes',
            data: [
              1,
              12,
              35,
              50,
              2,
              3
            ],
            borderWidth: 1,
            fill:false,
            borderColor:'rgba(0, 0, 0, 1)',
            // cubicInterpolationMode:'monotone'
            lineTension:0
          }
        ]
      },
      options: {
        scaleShowVerticalLines: true,
        maintainAspectRatio:false,
        legend:{
          display:true,
          position:'bottom'
        },
        layout:{
          padding:{
            left:100,
            right:100,
            top:30,
            bottom:30
          }
        },
        title:{
          display:true,
          text:'Active'
        },
        scales: {
          // yAxes: [
          //   {
          //     ticks: {
          //       stepSize: 10,
          //       max:50,
          //     }
          //   }
          // ],
          xAxes:[
            {
              gridLines:{
                display:false
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <ContentBlock2Component>
        <div class="chart-container" style={this.state.style}>
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      </ContentBlock2Component>
    );
  }
}

export default ContentBlock2;
