import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
const Test1 = () => {
  const [posts, setPosts] = useState([]);

  /**Thiệt lập giá trị khởi tạo của biến showPosts là false */
  const [showPosts, setShowPosts] = useState(false);
  /** Khi click vào button Post List thì hàm handlePost thực thi */
  const handlePost = () => {
    /**Hàm handlePost được thực thi khi hàm setShowPosts chạy với giá trị khác với giá trị khởi tạo của biến showPosts
     */
    setShowPosts(!showPosts);
  };
  /**Thực thi cuối cùng sau khi trình duyệt đã render ra màn hình,chỉ re-render lại khi  mỗi lần biến showPosts thay đổi
   */
  useEffect(() => {
    /**Nếu có biến showPosts thì thực thi code CALL FAKE API */
    if (showPosts) {
      /**CALL FAKE API */
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => setPosts(posts));
    } else {
      /**Còn biến showPosts không tồn tại thì trả về giá trị khởi tạo của hàm,setPosts là mảng rỗng
       */
      setPosts([]);
    }
  }, [showPosts]);
  return (
    <Fragment>
      <h1> List:</h1>
      <div className="btn-list">
        <button onClick={handlePost}>Post List</button>
        {/* <button>Comments List</button>
        <button>User List</button> */}
      </div>

      <ul>
        {/**Mỗi phần tử trong mảng posts được truyền vào hàm map() và tạo ra một phần tử <li>
         * với thuộc tính key là post.id (bắt buộc có id) và hiển thị ra màn hình  là post.title. */}
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Test1;
