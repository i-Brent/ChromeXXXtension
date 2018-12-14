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
      <div className="alignLeft purple darken-4" id='Navibar' light>
        <div id="classMenu" className="material-icons middle-align white-text">dehaze</div>
        <div id="classTitle">
          <h5>5/6 Science 2018-2019</h5>
          <span className="smallerText">MA, MB, and MC</span>
        </div>
      <div id="classApps" className="material-icons right-align white-text">apps</div>
      </div>
      
      
      /* <div>
        <Navbar className="alignLeft purple darken-4" id='Navibar' light>
          <Col>
          <i id='AlignLeft' className="medium material-icons left-align white-text">dehaze</i>
          </Col>
          <Col>
          <h4 className="white-text">5/6 Science 2018-2019</h4>
          <h5>MA, MB, and MC</h5>
          </Col>
          <Col>
          <i className="material-icons right-align white-text">apps</i>
          </Col>
        </Navbar>
      </div> */
    );
  }
}
