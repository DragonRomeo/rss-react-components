import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Products } from '../components/MainPage/Results/Results';

export const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Products | null>(null);

  const handleClick = () => {
    navigate('..');
  };

  useEffect(() => {
    const url = `https://dummyjson.com/products/${id}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, [id]);

  return (
    <div className="postInfo" onClick={handleClick}>
      {post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>{post.brand}</p>
        </>
      )}
    </div>
  );
};
