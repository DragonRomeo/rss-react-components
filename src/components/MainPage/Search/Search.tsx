import React, { Component } from 'react';

type Props = {
  children?: JSX.Element;
  updateData: (value: number) => void;
};

type State = {
  value: string;
  search: number;
};

export default class Search extends Component<Props, State> {
  inputValue: string;
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
      search: 1,
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
    this.setState((prevState) => {
      return { search: prevState.search + 1 };
    });
  }

  render() {
    return (
      <div className="searchContainer">
        <input
          name="key"
          id="key"
          type="text"
          placeholder="enter a name or something"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>search</button>
      </div>
    );
  }
}
