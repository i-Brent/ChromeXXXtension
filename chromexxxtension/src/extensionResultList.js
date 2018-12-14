import React from 'react'
import ExtensionResult from './extensionResult'

class ExtensionResultList extends React.Component {
  constructor(props){
    super(props)
    this.fetchAskMoQuestion = this.fetchAskMoQuestion.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.state={
      askMo: [],
      related: [],
    }
  }

  async fetchAskMoQuestion () {
    let response = await fetch(`http://askmo2.testmodo.com/api/goodquestion?access_token=edmodo-123&q=${this.props.selected}&db=prod&snippet_algo=4`)
    let json = await response.json()
    return json;
  }

  async fetchAskMoRelated () {
    let response = await fetch(`https://askmo2.testmodo.com/api/search?q=${this.props.selected}`)
    let json = await response.json()
    return json;
  }

  async componentDidMount () {
    let question = await this.fetchAskMoQuestion()
    let related = await this.fetchAskMoRelated()
    related = related.cards.filter(card => card.result_type === "Youtube")
    console.log(related);
    this.setState({
      askMo: question.questions,
      related: related,
      })
  }

  render() {
    return(<ExtensionResult askMo={this.state.askMo} related={this.state.related}/>)
  }
}

export default ExtensionResultList
