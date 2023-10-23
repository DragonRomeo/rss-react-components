import React, { Component } from 'react';

type Props = {
  children?: JSX.Element;
  updateData: (value: string) => void;
};

type State = {
  value: string;
  search: string;
};

export default class Search extends Component<Props, State> {
  inputValue: string;
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      value: '',
      search: 'transfer',
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
    this.props.updateData(this.state.search);
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
