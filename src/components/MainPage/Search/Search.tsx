import React, { Component } from 'react';

type Props = {
  type: string;
};

type State = {
  value: string;
};

export default class Search extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
    localStorage.setItem('inputKey', event.target.value);
  }

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
        <button>search</button>
      </div>
    );
  }
}
