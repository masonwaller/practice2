import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      curr: "",
      words: []
    };
  }
  handleChange = e => {
    this.setState({ curr: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ words: [...this.state.words, this.state.curr] });
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.curr}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="submit" />
        </form>
        <ul>
          {this.state.words.map(w => (
            <li>{w}</li>
          ))}
        </ul>
      </div>
    );
  }
}
