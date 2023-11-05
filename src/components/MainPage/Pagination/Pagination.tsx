import { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from '../../../providers/context';

interface Props {
  updateData: (value: string) => void;
}
export const Pagination: FC<Props> = ({ updateData }) => {
  const navigate = useNavigate();
  const { perPage, total } = useDataContext();
  const numberOfPage = Math.ceil(total / +perPage);
  const arrPage = new Array(numberOfPage).fill(0);

  const handleClick = (event: MouseEvent) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    const eValue = event.target.innerText;
    updateData(eValue);
    return navigate(`/rss-react-components/results?page=${eValue}`);
  };

  return (
    <div className="pagination">
      {arrPage.map((item, index) => (
        <button key={index} className="pageBtn" onClick={handleClick}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};
