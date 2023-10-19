import React, { Fragment, useEffect, useState, useTransition } from 'react';
import axios from 'axios';

const Test1 = () => {
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([]);

  const [showPosts, setShowPosts] = useState(false);

  const handlePost = () => {
    /**Hàm handlePost chạy khi hàm setShowPosts chạy với giá trị khác với giá trị khởi tạo của biến showPosts
     */
    setShowPosts(!showPosts);
  };
  const fetchData = () => {
    /**Nếu biến showPosts có gtri khac gtmd thì thực thi code CALL FAKE API */
    if (showPosts) {
      setLoading(true);
      /**CALL FAKE API */
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          setPosts(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error', error);
          setLoading(false);
        });
    } else {
      /**Còn biến showPosts có giá trị giống gtmd thì trả về giá trị khởi tạo của hàm,setPosts là mảng rỗng
       */
      setPosts([]);
    }
  };
  useEffect(() => {
    fetchData('posts');
  }, [showPosts]); //chỉ render lại khi biến showPosts thay đổi
  return (
    <Fragment>
      <h2> List:</h2>
      <div>
        <button onClick={handlePost}>Post List</button>
      </div>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <ul>
          {/**Mỗi phần tử trong mảng posts được truyền vào hàm map() và tạo ra một phần tử <li>
           * với thuộc tính key là post.id (bắt buộc có id) và hiển thị ra màn hình  là post.title. */}
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default Test1;
