import { useEffect, useState, useContext } from 'react';
import type { FC } from 'react';
import { Context } from '../../../providers/context';
import { Link, Outlet } from 'react-router-dom';

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

  const { search, page, perPage } = useContext(Context);

  const skipValue = perPage ? +perPage * +page - perPage : 0;

  useEffect(() => {
    const getData = () => {
      setIsLoad(false);
      const url = storageKey
        ? `https://dummyjson.com/products/search?q=${storageKey}&limit=${perPage}&skip=${skipValue}`
        : `https://dummyjson.com/products?limit=${perPage}&skip=${skipValue}`;
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
  }, [storageKey, search, perPage, skipValue]);

  const resultContent = () => {
    const mapContent = (
      <div className="itemBigContainer">
        <div className="itemWrapper">
          <div className="itemContainer">
            {items.map((item) => (
              <Link key={item.id} to={`/rss-react-components/results/${item.id}`}>
                <li>{`title: ${item.title}`}</li>
                <li>{`brand: ${item.brand}`}</li>
                <li>{`price: ${item.price} $`}</li>
              </Link>
            ))}
          </div>
          <Outlet />
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
