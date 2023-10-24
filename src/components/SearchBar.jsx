import React, { Fragment, useEffect, useId, useRef, useState } from 'react';
import axios from 'axios';
/**Xuất biến SearchBar có prop là { setResults }  */
export const SearchBar = ({ setResults }) => {
  //Xét state cho biến input
  const [input, setInput] = useState('');

  const inputRef = useRef();

  const inputId = useId();

  // Định nghĩa hàm fetchData, tham số (value) đại diện cho việc lấy giá trị đầu để lọc danh sách
  const fetchData = (value) => {
    //Gửi yêu cầu HTTP GET để lấy danh sách người dùng từ API
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const results = res.data.filter((user) => {
          return value && user && user.name && user.name.toLowerCase().includes(value);
        });
        //Cập nhật lại danh sách kết quả
        setResults(results);
      })
      /**Nếu call API lỗi thì hiện ra đây */
      .catch((error) => {
        console.error('Error', error);
      });
  };

  useEffect(() => {
    inputRef.current.focus();
    fetchData('users');
  }, []);
  //Hàm handleChange đc gọi khi người dùng nhập liệu
  const handleChange = (value) => {
    setInput(value); //Cập nhất lại giá trị của input
    fetchData(value); //Gọi hàm fetchData  để gọi API từ nguồn nào đó
  };
  return (
    <Fragment>
      <div className="box">
        <div className="search-box">
          <input
            id={inputId}
            type="search"
            ref={inputRef}
            placeholder="Type to search..."
            autoComplete="off"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label className="icon" htmlFor={inputId}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
        </div>
      </div>
    </Fragment>
  );
};
