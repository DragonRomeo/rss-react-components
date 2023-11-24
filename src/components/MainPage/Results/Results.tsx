import type { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDataContext } from '../../../providers/context';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useGetProductByKeyQuery } from '../../../store/apiSlice';

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
  const products = useSelector((state) => state.data.products);

  const { perPage, skipValue } = useDataContext();

  const storageKey = localStorage.getItem('inputKey');

  const searchValue = storageKey ? storageKey : '';

  const { data, isLoading, error } = useGetProductByKeyQuery({
    searchValue: searchValue,
    limit: perPage,
    skip: skipValue,
  });

  //Loader not working anymore coz 'Query is currently loading for the first time. No data yet.'

  const items = data ? data.products : undefined;
  console.log(data);
  console.log(isLoading);

  // const { error, isLoad } = useDataContext();

  const resultContent = () => {
    const mapContent = items ? (
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
    ) : (
      []
    );

    if (error) {
      return <p className="status">Error: {error.message}</p>;
    } else if (isLoading) {
      return <p className="status">Loading...</p>;
    } else {
      if (storageKey !== null) {
        if (items) {
          const content = items.length > 0 ? mapContent : <>Nothing found</>;
          return content;
        }
      } else {
        return mapContent;
      }
    }
  };

  return resultContent();
};
