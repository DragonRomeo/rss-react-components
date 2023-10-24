import React, { Component } from 'react';

export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

type Props = {
  children?: JSX.Element;
  data?: number;
};

type State = {
  error: null | Error;
  isLoaded: boolean;
  items: Array<People>;
};

export default class Results extends Component<Props, State> {
  storageKey: string | null;
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
    this.storageKey = localStorage.getItem('inputKey');
  }

  getData = () => {
    this.setState({ isLoaded: false });
    const url = this.storageKey
      ? `https://swapi.dev/api/people/?search=${this.storageKey}`
      : 'https://swapi.dev/api/people/';
    fetch(url)
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
  };

  componentDidMount(): void {
    this.getData();
  }

  componentDidUpdate(prevProps: { data: number | undefined }): void {
    if (this.props.data !== prevProps.data) {
      this.storageKey = localStorage.getItem('inputKey');
      this.getData();
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p className="status">Error: {error.message}</p>;
    } else if (!isLoaded) {
      return <p className="status">Loading...</p>;
    } else {
      if (this.storageKey !== null) {
        const trail = this.storageKey.trim().toLowerCase();
        const results = items.filter((item) => item.name.toLowerCase().includes(trail));

        const content =
          results.length > 0 ? (
            <div className="itemContainer">
              {results.map((item) => {
                return (
                  <ul key={item.name}>
                    <li>{`name: ${item.name}`}</li>
                    <li>{`height: ${item.height} cm`}</li>
                    <li>{`birth: ${item.birth_year}`}</li>
                    <li>{`gender: ${item.gender}`}</li>
                  </ul>
                );
              })}
            </div>
          ) : (
            <>Nothing found</>
          );

        return content;
      } else {
        return (
          <ul>
            {items.map((item) => (
              <li key={item.name}>{`${item.name}, ${item.height}cm, ${item.gender}`}</li>
            ))}
          </ul>
        );
      }
    }
  }
}
