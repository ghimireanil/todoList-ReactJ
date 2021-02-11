import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Todo = () => {
  const [items, setItems] = useState([]);
  const [start, setStart] = useState(0);

  const fetchItems = async () => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos?',
      params: {
        _start: start,
        _limit: 10,
      },
    }).then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  //   const handleClick = () => setStart(start + 10);

  useEffect(() => {
    fetchItems();
  }, [start]);

  return (
    <>
      <div>
        {items.map(({ id, userId, title, completed }) => (
          <ul>
            <li>
              <h1 key={id}>
                Todo Item no:{id}------
                <Link to={`/todos/${id}`}>{title}</Link>
              </h1>
            </li>
          </ul>
        ))}
      </div>
      <button onClick={() => setStart(start + 10)}>Click to Load more</button>
    </>
  );
};

export default Todo;
