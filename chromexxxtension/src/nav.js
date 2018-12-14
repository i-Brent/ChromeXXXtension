import React from 'react';
import { Col, Row, Navbar, } from 'reactstrap';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar className="alignLeft purple darken-4" id='Navibar' light>
          <Col>
          <i id='AlignLeft'className="medium material-icons left-align white-text">dehaze</i>
          </Col>
          <Col>
          <h4 className="white-text">5/6 Science 2018-2019</h4>
          <h5>MA, MB, and MC</h5>
          </Col>
          <Col>
          <i className="material-icons right-align white-text">apps</i>
          </Col>
        </Navbar>
      </div>
    );
  }
}
