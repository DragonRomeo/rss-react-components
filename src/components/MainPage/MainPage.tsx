import { useState } from 'react';
import type { FC } from 'react';
import { Search } from './Search/Search';
import { Results } from './Results/Results';
import ErrorBtn from '../ErrorBoundary/ErrorBtn/ErrorBtn';

type Props = {
  children?: JSX.Element;
};

export const MainPage: FC<Props> = () => {
  const [search, setSearch] = useState(0);

  const updateData = (value: number) => {
    setSearch(value);
  };

  return (
    <div className="pc">
      <div className="pageWrapper">
        <div className="mainPage">
          <Search updateData={updateData} />
          <Results data={search} />
        </div>
      </div>
      <ErrorBtn></ErrorBtn>
    </div>
  );
};
