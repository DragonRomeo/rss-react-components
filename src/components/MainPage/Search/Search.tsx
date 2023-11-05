import type { FC } from 'react';
import { useEffect, useState } from 'react';

type Props = {
  children?: JSX.Element;
  updateData: (value: string) => void;
  updateData3: (value: string) => void;
};

export const Search: FC<Props> = ({ updateData, updateData3 }) => {
  let inputValue = '';
  const [value, setValue] = useState('');
  const [numPage, setNumPage] = useState('10');

  const handleChange = (event: { target: { value: string } }) => {
    setValue(event.target.value);
    inputValue = event.target.value;
    localStorage.setItem('inputKey', inputValue);
  };

  const handleChange2 = (event: { target: { value: string } }) => {
    setNumPage(event.target.value);
    updateData3(event.target.value);
  };

  const handleClick = () => {
    updateData(value);
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
      <label>
        inputPerPage:
        <input
          name="key"
          id="key"
          type="number"
          placeholder="put numb"
          min="1"
          max="100"
          value={numPage}
          onChange={handleChange2}
        />
      </label>
      <button className="buttonSearch" onClick={handleClick}>
        search
      </button>
    </div>
  );
};
