import React, { Component } from 'react';

type Props = {
  type?: string; //Replace for children?
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
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
    //TODO: localStorage.Set should use after click btn 'search' - not like that.
    localStorage.setItem('inputKey', event.target.value);
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
        <button>search</button>
      </div>
    );
  }
}
