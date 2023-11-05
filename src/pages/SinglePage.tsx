import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const SinglePage = () => {
  const { id } = useParams();
  console.log(`id = ${id}`);
  const [post, setPost] = useState(null);
  console.log(`singlePage родился`)

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
    <div className='postInfo'>
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
