import React from 'react'
import { Row } from 'reactstrap';

class ExtensionSearch extends React.Component{
  render() {
    return (
      <div className="Search">
        <Row id='SearchLabel'>
          <h5 className="SearchStyle">{this.props.selected}</h5>
          <p></p>
          <i className="material-icons right-align" onClick={e => {this.props.expandSideBar()}}>remove_circle_outline</i>
        </Row>
      </div>
    )
  }
}

export default ExtensionSearch
