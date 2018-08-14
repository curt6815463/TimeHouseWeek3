import React, { Component } from 'react';
import TopBar from '@/components/TopBar/';
import HomeScene from '@/components/HomeScene/index';
import './common/css/reset.css'
class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <HomeScene />
      </div>
    );
  }
}

export default App;
