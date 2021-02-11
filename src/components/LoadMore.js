import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LoadMore = () => {
  const [items, setItems] = useState([]);
  let { id } = useParams();

  const fetchItems = async () => {
    axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/todos/${id}`,
    }).then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {Object.keys(items).length > 0 ? (
        <div>
          To do Item: {items.title}
          <ul>
            <li>Author no: {items.userId}</li>
            <li>Task Completed: {items.completed ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default LoadMore;
