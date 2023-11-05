import { useContext, useEffect, useState } from 'react';
import type { FC } from 'react';
import { Search } from './Search/Search';
import ErrorBtn from '../ErrorBoundary/ErrorBtn/ErrorBtn';
import { Outlet } from 'react-router-dom';
import { Pagination } from './Pagination/Pagination';
import { Context } from '../../providers/context';

type Props = {
  children?: JSX.Element;
};

const mainUrl = `https://dummyjson.com/products`;
const searchUrl = `https://dummyjson.com/products/search`;

export const MainPage: FC<Props> = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState('1');
  const [perPage, setPerPage] = useState('10');

  const [error, setError] = useState<null | Error>(null);
  const [isLoad, setIsLoad] = useState(false);
  const [items, setItems] = useState<Array<Products>>([]);
  const [total, setTotal] = useState(0);

  const storageKey = localStorage.getItem('inputKey');
  const skipValue = perPage ? +perPage * +page - +perPage : 0;

  useEffect(() => {
    const getData = () => {
      setIsLoad(false);
      let url: string;
      if (storageKey) {
        const newURL = new URL(searchUrl);
        newURL.searchParams.append('q', storageKey);
        newURL.searchParams.append('limit', perPage);
        newURL.searchParams.append('skip', skipValue.toString());

        url = newURL.href;
      } else {
        const newURL = new URL(mainUrl);
        newURL.searchParams.append('limit', perPage);
        newURL.searchParams.append('skip', skipValue.toString());

        url = newURL.href;
      }

      fetch(url)
        .then((response) => response.json())
        .then(
          (result) => {
            setItems(result.products);
            setTotal(+result.total);
          },
          (error) => {
            setError(error);
          }
        )
        .finally(() => setIsLoad(true));
    };
    getData();
  }, [storageKey, search, perPage, skipValue]);

  const updateData = (value: string) => {
    setSearch(value);
  };

  const updateData2 = (value: string) => {
    setPage(value);
  };

  const updateDate3 = (value: string) => {
    setPerPage(value);
  };

  return (
    <div className="pc">
      <div className="pageWrapper">
        <div className="mainPage">
          <Context.Provider value={{ search, page, perPage, items, error, isLoad, total }}>
            <Search updateData={updateData} updateData3={updateDate3} />
            <Outlet></Outlet>
            <Pagination updateData={updateData2} />
          </Context.Provider>
        </div>
      </div>
      <ErrorBtn></ErrorBtn>
    </div>
  );
};
