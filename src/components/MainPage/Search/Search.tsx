import React, { Component } from 'react';

type Props = {
  type?: string; //Replace for children?
};

type State = {
  value: string;
};

export default class Search extends Component<Props, State> {
  inputValue: string;
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.inputValue = '';
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
    this.inputValue = event.target.value;
  }

  handleClick() {
    localStorage.setItem('inputKey', this.inputValue);
  }

  //TODO: add placeholder
  render() {
    return (
      <div className="searchContainer">
        <input
          name="key"
          id="key"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>search</button>
      </div>
    );
  }
}
