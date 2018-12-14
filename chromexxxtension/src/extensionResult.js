import React from 'react'


class ExtensionResult extends React.Component{
  render(){
    return (
      <div id="Results">
        <div id='WikiResult'>
          <span id='Wiki'>WIKIPEDIA - </span>
          <p>{this.props.wiki.summary}</p>
          <a href={this.props.wiki.link}>Read More</a>
        </div>
        <div id="AskMoArticle">
          <img src={this.props.askMo[0].img}/>
          <p>{this.props.askMo[0].headline}<span>- {this.props.askMo[0].author}</span></p>
        </div>
        <div id="AskMoArticle">
          <img src={this.props.askMo[1].img}/>
          <p>{this.props.askMo[1].headline}<span>- {this.props.askMo[1].author}</span></p>
        </div>
        <div id="AskMoQuestions">
          <div id="AskMoQ">
            <p>{this.props.askMo[2].question}</p>
          </div>
          <div id="AskMoQ">
            <p>{this.props.askMo[3].question}</p>
          </div>
          <div id="AskMoQ">
            <p>{this.props.askMo[4].question}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ExtensionResult
