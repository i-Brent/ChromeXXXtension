import React from 'react';
import { Row, Col, Container } from 'reactstrap'


class Jumbo extends React.Component{
  render(){
    return(
      <div id="Jumbo" className="white-text">
      <Container>
        <Row>
          <Col s6>
            <Row>
              <p>Due Nov 26</p>
            </Row>
            <Row>
              <h5><span
              onMouseUp={e => this.props.expandSideBar(e, 'Herbivores')}>Herbivores</span> , <span
              onMouseUp={e => this.props.expandSideBar(e, 'Omnivores')}>Omnivores</span> and <span
              onMouseUp={e => this.props.expandSideBar(e, 'Carnivores')}>Carnivores</span> of California</h5>
            </Row>
            <Row>
              <p className='name'>Benjamin Green</p>
              <p className="date">Nov 8(Edited Nov 16)</p>
              <p className="comments">1 class comment</p>
            </Row>
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}

export default Jumbo
