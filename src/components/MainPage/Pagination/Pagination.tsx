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
    console.log(eValue);
    return navigate(`/rss-react-components/results?page=${eValue}`);
  };

  //TODO: кол-во кнопок должно зависеть от того, сколько в итоге получится страниц.
  //TODO: общее кол-во элементов / кол-во айтемов на странице = кол-во кнопок

  return (
    <div className="pagination">
      {arrPage.map((item, index) => (
        <button key={index} className="pageBtn" onClick={(e) => handleClick(e)}>
          {index + 1}
        </button>
      ))}
      {/* <button className="pageBtn" onClick={(e) => handleClick(e)}>
        1
      </button>
      <button className="pageBtn" onClick={(e) => handleClick(e)}>
        2
      </button>
      <button className="pageBtn" onClick={(e) => handleClick(e)}>
        3
      </button>
      <button className="pageBtn" onClick={(e) => handleClick(e)}>
        4
      </button> */}
    </div>
  );
};
