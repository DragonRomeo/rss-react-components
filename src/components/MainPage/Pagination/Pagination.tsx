import { useNavigate } from 'react-router-dom';

export const Pagination = ({ updateData }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    const eValue = event.target.text;
    updateData(eValue);
    console.log(eValue);
    // return navigate(`secondpage?page=${eValue}`);
  };

  return (
    <>
      <button onClick={(e) => handleClick(e)}>1</button>
      <button onClick={(e) => handleClick(e)}>2</button>
      <button onClick={(e) => handleClick(e)}>3</button>
      <button onClick={(e) => handleClick(e)}>4</button>
    </>
  );
};
