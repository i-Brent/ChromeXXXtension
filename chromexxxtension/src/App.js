import React, { Component } from 'react'
//Components
import Navi from './nav'
import Jumbo from './jumbo'
import Body from './body'
import Extension from './extension'
import Attachments from './attachments'
//packages
import {Row, Col} from 'reactstrap'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      expanded:false,
      which:''
    }
    this.expandSideBar = this.expandSideBar.bind(this)
  }

  expandSideBar(e, which) {
    e.preventDefault()
    console.log('logo', which);
    let expanded = !this.state.expanded
    this.setState({expanded, which})
  }

  render() {
    return (
      <div className="App">
      <Row>
        <Col id="MainCol" xs={this.state.expanded? '8': '12'}>
          <Navi/>
          <Jumbo expandSideBar={this.expandSideBar}/>
          <Body expandSideBar={this.expandSideBar}/>
        </Col>
        {this.state.expanded? <Col xs="4" id="SideBar">
          <Extension which={this.state.which} expandSideBar={this.expandSideBar}/>
        </Col>: null
        }
        </Row>
      </div>
    );
  }
}

export default App;
