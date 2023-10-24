import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
const Test2 = () => {
  const [data, setData] = useState([]);

  const [waiting, setWaiting] = useState(false);

  const dataFetch = (endpoint) => {
    {
      //Waiting để khi gọi API
      setWaiting(true); //đang gọi API nên phải !waiting
      axios
        .get(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then((res) => {
          setData(res.data);
          setWaiting(false); //Gọi API xong rồi thì ko waiting nữa
        })

        .catch((error) => {
          console.error('Error', error);
          setLoading(false); //Không waiting nữa mà phải hiện error ra màn hình
        });
    }
  };

  useEffect(() => {
    dataFetch('users'); //Hiện ra gtmd của API đó khi refresh trang là API của users
  }, []);

  return (
    <Fragment>
      <h2 style={{ textAlign: 'center' }}>Display list:</h2>
      <div className="btn-list">
        <button onClick={() => dataFetch('posts')}>Post</button>
        <button onClick={() => dataFetch('comments')}>Comment</button>
        <button onClick={() => dataFetch('users')}>Users</button>
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
            <li key={item.id}>{item.name || item.title || item.website}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default Test2;
