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
  data?: string;
};

type State = {
  error: null | Error;
  isLoaded: boolean;
  items: Array<People>;
};

export default class Results extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
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
    const storageKey = localStorage.getItem('inputKey');
    if (error) {
      return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      if (storageKey !== null) {
        const trail = storageKey.trim().toLowerCase();
        const results = items.filter((item) => item.name.toLowerCase().includes(trail));

        //TODO: Maybe search used only for 1t page. Need to test it

        const content =
          results.length > 0 ? (
            <>
              {console.log(results)}

              {results.map((item) => {
                return (
                  <ul key={item.name}>
                    {/* {console.log(item.name)} */}
                    <li>{`name: ${item.name}`}</li>
                    <li>{`height: ${item.height}`}</li>
                    <li>{`birth: ${item.birth_year}`}</li>
                    <li>{`gender: ${item.gender}`}</li>
                  </ul>
                );
              })}
            </>
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
