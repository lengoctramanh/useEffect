import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
const Test2 = () => {
  const [data, setData] = useState([]);

  const [showData, setShowData] = useState(false);

  const [waiting, setWaiting] = useState(false);

  const dataFetch = () => {
    if (showData) {
      setWaiting(true);
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          setData(res.data);
          setWaiting(false);
        })

        .catch((error) => {
          console.error('Error', error);
          setLoading(false);
        });
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    dataFetch('posts');
  }, [showData]);
  return (
    <Fragment>
      <h2 style={{ textAlign: 'center' }}>Display list:</h2>
      <div className="btn-list">
        <button>Post</button>
        <button>Comment</button>
        <button onClick={() => setShowData(!showData)}>Users</button>
      </div>
      {waiting ? (
        <div>
          <p>Waiting...</p>
        </div>
      ) : (
        <ul>
          {/**Mỗi phần tử trong mảng posts được truyền vào hàm map() và tạo ra một phần tử <li>
           * với thuộc tính key là post.id (bắt buộc có id) và hiển thị ra màn hình  là post.title. */}
          {data.map((item) => (
            <li key={item.id}>{item.username}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default Test2;
