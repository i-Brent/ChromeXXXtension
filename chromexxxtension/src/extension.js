import React from 'react'
import ExtensionHeader from './extensionHeader'
import ExtensionSearch from './extensionSearch'
import ExtensionResultList from './extensionResultList'

class Extension extends React.Component {
  render () {
    return (
      <div>
        <ExtensionHeader/>
        <ExtensionSearch selected={this.props.selected} expandSideBar={this.props.expandSideBar}/>
        <ExtensionResultList selected={this.props.selected}/>
      </div>
    )
  }
}

export default Extension;
