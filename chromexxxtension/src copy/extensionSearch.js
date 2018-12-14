import React from 'react'
import { Row } from 'reactstrap';

class ExtensionSearch extends React.Component{
  render() {
    return (
      <div className="Search">
        <div>
          <div id="searchLabel">
          	<h5 className="SearchStyle">"{this.props.selected}"</h5>
          </div>
          <div id="clearSearch">
          	<i className="material-icons middle-align" onClick={e => {this.props.expandSideBar()}}>closed</i>
          </div>
        </div>
      </div>
    )
  }
}

export default ExtensionSearch
