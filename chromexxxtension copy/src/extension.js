import React from 'react'
import ExtensionHeader from './extensionHeader'
import ExtensionSearch from './extensionSearch'
import ExtensionResultList from './extensionResultList'

class Extension extends React.Component {
  render () {
    return (
      <div>
        <ExtensionHeader/>
        <ExtensionSearch which={this.props.which} expandSideBar={this.props.expandSideBar}/>
        <ExtensionResultList which={this.props.which}/>
      </div>
    )
  }
}

export default Extension;
