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
  const [perPage, setPerPage] = useState('10');

  console.log(`page =${page}`);
  console.log(`search =${search}`);
  console.log(`perPage =${perPage}`);

  //TODO: Отправить Search & Page через один context.

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
          <Context.Provider value={{ search, page, perPage }}>
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
