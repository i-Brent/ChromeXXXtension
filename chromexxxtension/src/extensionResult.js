import React from 'react'


class ExtensionResult extends React.Component{
  render(){
    console.log(this.props.askMo[0]);
    return (this.props.askMo[0] && this.props.related[0] )?
    (
      <div id="Results">
        <div id="AskMoArticle">
          <iframe
          src={this.props.related[0].thumbnail_url}>
          </iframe>
          <p>{this.props.related[0].title}</p>
        </div>
        <div id="AskMoArticle">
          <iframe
          src={this.props.related[1].thumbnail_url}>
          </iframe>
          <p>{this.props.related[1].title}</p>
        </div>
        <div id="AskMoQuestions">
          <div id="AskMoQ">
            <p>{this.props.askMo[0].question}</p>
          </div>
          <div id="AskMoQ">
            <p>{this.props.askMo[1].question}</p>
          </div>
          <div id="AskMoQ">
            <p>{this.props.askMo[2].question}</p>
          </div>
        </div>
      </div>
    ):null
  }
}

export default ExtensionResult
