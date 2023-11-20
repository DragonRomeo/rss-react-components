import type { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDataContext } from '../../../providers/context';
import { useSelector } from 'react-redux/es/hooks/useSelector';

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
  const [text] = useSelector((state) => state.data.rss);
  // console.log(text);

  const storageKey = localStorage.getItem('inputKey');
  const { items, error, isLoad } = useDataContext();

  const resultContent = () => {
    console.log(items);
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
        //TODO: results is empty in NOT 1T PAGE. Bug for pagination here
        //TODO: Проблема видимо в том, как реализован поиск в API. Он не находит по фильтру там ключ и потому пишет Nothing found
        // const results = items.filter((item) => item.title.toLowerCase().includes(trail));
        // console.log(`results = ${results}`);

        const content = items.length > 0 ? mapContent : <>Nothing found</>;

        return content;
      } else {
        return mapContent;
      }
    }
  };

  return resultContent();
};
