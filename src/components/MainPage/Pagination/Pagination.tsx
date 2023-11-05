import { useNavigate } from 'react-router-dom';

export const Pagination = ({ updateData }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    const eValue = event.target.text;
    updateData(eValue);
    console.log(eValue);
    // return navigate(`results?page=${eValue}`);
  };

  //TODO: кол-во кнопок должно зависеть от того, сколько в итоге получится страниц.
  //TODO: общее кол-во элементов / кол-во айтемов на странице = кол-во кнопок
  return (
    <div className="pagination">
      <button className="pageBtn" onClick={(e) => handleClick(e)}>
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
      </button>
    </div>
  );
};
