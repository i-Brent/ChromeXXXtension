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
      selected:''
    }
    this.expandSideBar = this.expandSideBar.bind(this)
    this.handleBodyHighlight = this.handleBodyHighlight.bind(this)
  }

  handleBodyHighlight(e) {
    e.preventDefault()
    let selected = window.getSelection().toString()
    if(selected !== ''){
      this.expandSideBar(selected)
    }
  }

  expandSideBar(selected = '') {
    console.log('logo', selected);
    let expanded = !this.state.expanded
    this.setState({expanded, selected})
  }

  render() {
    return (
      <div className="App" onMouseUp={e => this.handleBodyHighlight(e)}>
      <Row>
        <Col id="MainCol" xs={this.state.expanded? '8': '12'}>
          <Navi/>
          <Jumbo expandSideBar={this.expandSideBar}/>
          <Body expandSideBar={this.expandSideBar}/>
        </Col>
        {this.state.expanded? <Col xs="4" id="SideBar">
          <Extension selected={this.state.selected} expandSideBar={this.expandSideBar}/>
        </Col>: null
        }
        </Row>
      </div>
    );
  }
}

export default App;
