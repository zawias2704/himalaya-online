import React from 'react';
import Card from '../Card';
import * as directions from './directions';
import './Parser.css';
import htmlToJson from './htmlToJson';
import jsonToHtml from './jsonToHtml';

class Parser extends React.Component {
  state = {
    inputValue: '',
    outputValue: '',
  };

  textareaOnChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  convertOnClick = () => {
    const parseFunction = this.props.direction === directions.HTML_TO_JSON
      ? htmlToJson
      : jsonToHtml;

    this.setState((prevState) => ({
      outputValue: parseFunction(prevState.inputValue),
    }));
  };

  render() {
    return (
      <Card>
        <div className="header">
          <span className="title">
            {this.props.direction === directions.HTML_TO_JSON ? 'HTML to JSON' : 'JSON to HTML'}
          </span>
          <button className="button" onClick={this.convertOnClick}>Convert</button>
        </div>
        <div className="textAreaRow">
          <textarea onChange={this.textareaOnChange} />
          <textarea value={this.state.outputValue} />
        </div>
      </Card>
    );
  }
}

export default Parser;
