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
    localStorage.setItem('inputKey', this.inputValue);
  }

  handleClick() {
    this.props.updateData(this.state.search);
    this.setState((prevState) => {
      return { search: prevState.search + 1 };
    });
  }

  componentDidMount(): void {
    const locStor = localStorage.getItem('inputKey');
    if (locStor !== null) {
      this.setState({ value: locStor });
    }
  }

  render() {
    return (
      <div className="searchContainer">
        <p>hello, hunter-hacker.id.18135</p>
        <p>write a name here to search target</p>
        <label>
          targetName:
          <input
            name="key"
            id="key"
            type="text"
            placeholder="input here"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <button className="buttonSearch" onClick={this.handleClick}>
          search
        </button>
      </div>
    );
  }
}
