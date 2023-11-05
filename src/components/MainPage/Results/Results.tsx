import { useEffect, useState, useContext } from 'react';
import type { FC } from 'react';
import { Context } from '../../../providers/context';

export interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type Props = {
  children?: JSX.Element;
  data?: number;
};

export const Results: FC<Props> = () => {
  const [error, setError] = useState<null | Error>(null);
  const [isLoad, setIsLoad] = useState(false);
  const [items, setItems] = useState<Array<Products>>([]);
  const storageKey = localStorage.getItem('inputKey');
  const { search, page } = useContext(Context);
  console.log(`search =${search}`);
  console.log(`page = ${page}`);

  useEffect(() => {
    const getData = () => {
      setIsLoad(false);
      const url = storageKey
        ? `https://dummyjson.com/products/search?q=${storageKey}`
        : 'https://dummyjson.com/products';
      fetch(url)
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoad(true);
            setItems(result.products);
          },
          (error) => {
            setIsLoad(true);
            setError(error);
          }
        );
    };
    getData();
  }, [storageKey, search]);

  const resultContent = () => {
    const mapContent = (
      <div className="itemBigContainer">
        <div className="itemWrapper">
          <div className="itemContainer">
            {items.map((item) => (
              <ul key={item.id}>
                <li>{`title: ${item.title}`}</li>
                <li>{`brand: ${item.brand}`}</li>
                <li>{`price: ${item.price} $`}</li>
              </ul>
            ))}
          </div>
          <div className="btnContainer">
            <button className="pageBtn">1</button>
            <button className="pageBtn">2</button>
          </div>
        </div>
      </div>
    );

    if (error) {
      return <p className="status">Error: {error.message}</p>;
    } else if (!isLoad) {
      return <p className="status">Loading...</p>;
    } else {
      if (storageKey !== null) {
        const trail = storageKey.trim().toLowerCase();
        const results = items.filter((item) => item.title.toLowerCase().includes(trail));

        const content = results.length > 0 ? mapContent : <>Nothing found</>;

        return content;
      } else {
        return mapContent;
      }
    }
  };

  return resultContent();
};
