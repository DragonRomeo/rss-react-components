import type { FC } from 'react';
import { useEffect, useState } from 'react';

type Props = {
  children?: JSX.Element;
  updateData: (value: number) => void;
};

export const Search: FC<Props> = ({ updateData }) => {
  let inputValue = '';
  const [value, setValue] = useState('');
  const [search, setSearch] = useState(1);

  const handleChange = (event: { target: { value: string } }) => {
    setValue(event.target.value);
    inputValue = event.target.value;
    localStorage.setItem('inputKey', inputValue);
  };

  const handleClick = () => {
    updateData(search);
    setSearch((prevState) => {
      return prevState + 1;
    });
  };

  useEffect(() => {
    const locStor = localStorage.getItem('inputKey');

    if (locStor !== null) {
      setValue(locStor);
    }
  }, []);

  return (
    <div className="searchContainer">
      <p>hello, hunter-hacker.id.18135</p>
      <p>write a name here to search target</p>
      <label>
        targetName:
        <input
          name="key"
          id="key"
          type="text"
          placeholder="input here"
          value={value}
          onChange={handleChange}
        />
      </label>
      <button className="buttonSearch" onClick={handleClick}>
        search
      </button>
    </div>
  );
};
