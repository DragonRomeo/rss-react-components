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

type Props = {};

type State = {
  error: null | unknown;
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
        //find key in api logic
        const trail = storageKey.trim().toLowerCase();
        const obj = items.find((item) => item.name.toLowerCase().includes(trail));
        console.log(storageKey);
        console.log(trail);
        console.log(obj);
        //str includes?
        const content = obj ? (
          <>
            <p>{`name: ${obj.name}`}</p>
            <p>{`height: ${obj.height}`}</p>
            <p>{`birth: ${obj.birth_year}`}</p>
            <p>{`gender: ${obj.gender}`}</p>
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
