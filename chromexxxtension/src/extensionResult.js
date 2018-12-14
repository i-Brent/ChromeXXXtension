import React from 'react'


class ExtensionResult extends React.Component{
  render(){
    console.log(this.props.askMo[0]);
    return (this.props.askMo[0] && this.props.related[0] )?
    (
      <div id="Results">
        <div id="AskMoArticle">
          <iframe scrolling="no" id="thumb" src={this.props.related[0].thumbnail_url}>
          </iframe>
          <div className="resultTitle">{this.props.related[0].title}</div>
        </div>
        <div id="AskMoArticle">
          <iframe scrolling="no" id="thumb" src={this.props.related[1].thumbnail_url}>
          </iframe>
          <div className="resultTitle">{this.props.related[1].title}</div>
        </div>
        <div id="AskMoArticle">
          <iframe scrolling="no" id="thumb" src={this.props.related[2].thumbnail_url}>
          </iframe>
          <div className="resultTitle">{this.props.related[1].title}</div>
        </div>
        <div id="AskMoQuestions">
        <p className="questionsTitle">Common questions people ask</p>
          <div id="AskMoQ">
            <p>{this.props.askMo[0].question}</p>
          </div>
          <div id="AskMoQ">
            <p>{this.props.askMo[1].question}</p>
          </div>
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
    ):null
  }
}

export default ExtensionResult
