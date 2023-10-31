import { useEffect, useState } from 'react';
import type { FC } from 'react';

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

export const Results: FC<Props> = () => {
  const [error, setError] = useState<null | Error>(null);
  const [isLoad, setIsLoad] = useState(false);
  const [items, setItems] = useState<Array<People>>([]);
  const storageKey = localStorage.getItem('inputKey');

  useEffect(() => {
    const getData = () => {
      setIsLoad(false);
      const url = storageKey
        ? `https://swapi.dev/api/people/?search=${storageKey}`
        : 'https://swapi.dev/api/people/';
      fetch(url)
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoad(true);
            setItems(result.results);
          },
          (error) => {
            setIsLoad(true);
            setError(error);
          }
        );
    };
    getData();
  }, [storageKey]);

  const resultContent = () => {
    if (error) {
      return <p className="status">Error: {error.message}</p>;
    } else if (!isLoad) {
      return <p className="status">Loading...</p>;
    } else {
      if (storageKey !== null) {
        const trail = storageKey.trim().toLowerCase();
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
          <div className="itemContainer">
            {items.map((item) => (
              <ul key={item.name}>
                <li>{`name: ${item.name}`}</li>
                <li>{`height: ${item.height} cm`}</li>
                <li>{`birth: ${item.birth_year}`}</li>
                <li>{`gender: ${item.gender}`}</li>
              </ul>
            ))}
          </div>
        );
      }
    }
  };

  return resultContent();
};
