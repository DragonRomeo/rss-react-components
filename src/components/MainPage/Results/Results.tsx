import React, { Component } from 'react';

type Props = {};

type State = {};

export default class Results extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount(): void {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.name}>{`${item.name}, ${item.height}cm, ${item.gender}`}</li>
          ))}
        </ul>
      );
    }
    // return <div className="resultsContainer">Results</div>;
  }
}
