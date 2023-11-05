import { useState } from 'react';
import type { FC } from 'react';
import { Search } from './Search/Search';
import ErrorBtn from '../ErrorBoundary/ErrorBtn/ErrorBtn';
import { Outlet } from 'react-router-dom';
import { Pagination } from './Pagination/Pagination';
import { Context } from '../../providers/context';

type Props = {
  children?: JSX.Element;
};

export const MainPage: FC<Props> = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState('1');
  console.log(`page =${page}`);
  console.log(`search =${search}`);

  //TODO: Отправить Search & Page через один context.

  const updateData = (value: string) => {
    setSearch(value);
  };

  const updateData2 = (value: string) => {
    setPage(value);
  };

  return (
    <div className="pc">
      <div className="pageWrapper">
        <div className="mainPage">
          <Context.Provider value={{ search, page }}>
            <Search updateData={updateData} />
            <Outlet></Outlet>
            <Pagination updateData={updateData2} />
          </Context.Provider>
        </div>
      </div>
      <ErrorBtn></ErrorBtn>
    </div>
  );
};
