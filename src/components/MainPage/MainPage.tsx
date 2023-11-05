import { useState } from 'react';
import type { FC } from 'react';
import { Search } from './Search/Search';
import { Results } from './Results/Results';
import ErrorBtn from '../ErrorBoundary/ErrorBtn/ErrorBtn';
import { Outlet } from 'react-router-dom';
import { Pagination } from './Pagination/Pagination';

type Props = {
  children?: JSX.Element;
};

export const MainPage: FC<Props> = () => {
  const [search, setSearch] = useState(0);
  const [page, setPage] = useState(1);
  console.log(page);

  const updateData = (value: number) => {
    setSearch(value);
  };

  const updateData2 = (value) => {
    setPage(value);
  };

  return (
    <div className="pc">
      <div className="pageWrapper">
        <div className="mainPage">
          <Search updateData={updateData} />
          <Outlet></Outlet>

          <Pagination updateData={updateData2}></Pagination>
        </div>
      </div>
      <ErrorBtn></ErrorBtn>
    </div>
  );
};
