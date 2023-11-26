import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DataContext } from '../../providers/context';
import { Pagination } from './Pagination/Pagination';
import { Search } from './Search/Search';
import { useGetProductByKeyQuery } from '../../store/apiSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ErrorBtn from '../ErrorBoundary/ErrorBtn/ErrorBtn';

type Props = {
  children?: JSX.Element;
};

export const MainPage: FC<Props> = () => {
  const [page, setPage] = useState('1');
  const [perPage, setPerPage] = useState('10');
  const [total, setTotal] = useState(0);

  const search = useSelector((state) => state.data.search);
  console.log(search);
  const storageKey = localStorage.getItem('inputKey');
  const skipValue = perPage ? +perPage * +page - +perPage : 0;
  const searchValue = storageKey ? storageKey : '';

  const updateData2 = (value: string) => {
    setPage(value);
  };

  const updateDate3 = (value: string) => {
    setPerPage(value);
  };

  const { data, isLoading, error } = useGetProductByKeyQuery({
    searchValue: searchValue,
    limit: perPage,
    skip: skipValue,
  });

  useEffect(() => {
    if (data) {
      setTotal(data.total);
    }
  }, [data, search]);

  return (
    <div className="pc">
      <div className="pageWrapper">
        <div className="mainPage">
          <DataContext.Provider value={{ page, perPage, data, error, isLoading, total, skipValue }}>
            <Search updateData3={updateDate3} />
            <Outlet></Outlet>
            <Pagination updateData={updateData2} />
          </DataContext.Provider>
        </div>
      </div>
      <ErrorBtn></ErrorBtn>
    </div>
  );
};
