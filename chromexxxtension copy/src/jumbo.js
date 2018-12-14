import React from 'react';
import { Row, Col, Container } from 'reactstrap'


class Jumbo extends React.Component{
  render(){
    return(
      <div id="Jumbo" className="white-text">
              <span class="smallText">Due Nov 26</span>
              <h5><span
              onMouseUp={e => this.props.expandSideBar(e, 'Herbivores')}>Herbivores</span> , <span
              onMouseUp={e => this.props.expandSideBar(e, 'Omnivores')}>Omnivores</span> and <span
              onMouseUp={e => this.props.expandSideBar(e, 'Carnivores')}>Carnivores</span> of California</h5>
              
              <div className="smallerText">
              	<div className='name'>Benjamin Green</div>
			  	<div className="date">Nov 8(Edited Nov 16)</div>
			  	<div className="comments">1 class comment</div>
              </div>
      </div>
    )
  }
}

export default Jumbo
