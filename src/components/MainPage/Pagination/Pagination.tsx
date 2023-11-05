import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../providers/context';

export const Pagination = ({ updateData }) => {
  const navigate = useNavigate();
  const maxItems = 100;
  const { perPage } = useContext(Context);
  const numberOfPage = Math.ceil(maxItems / +perPage);
  const arrPage = new Array(numberOfPage).fill(0);

  const handleClick = (event) => {
    const eValue = event.target.innerText;
    updateData(eValue);
    return navigate(`/rss-react-components/results?page=${eValue}`);
  };

  return (
    <div className="pagination">
      {arrPage.map((item, index) => (
        <button key={index} className="pageBtn" onClick={(e) => handleClick(e)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};
