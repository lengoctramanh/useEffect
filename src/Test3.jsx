import React, { Fragment, useState } from 'react';
import './Test3.css';
/**Nhận hai prop đã truyền */
import { SearchBar } from './components/SearchBar';
import { SearchList } from './components/SearchList';

const Test3 = () => {
  const [results, setResults] = useState([]);

  return (
    <Fragment>
      {/**prop setResults được truyền vào thành phần con <SearchBar> */}
      <SearchBar setResults={setResults} />
      {/**prop results được truyền vào thành phần con <SearchList>. */}
      <SearchList results={results} />
    </Fragment>
  );
  /**Khi truyền prop, thêm tên prop và giá trị của nó vào trong {}.
   * Trong trường hợp này,truyền prop tên là setResults với giá trị làm hàm
   * setResults
   */
};

export default Test3;

/**export xuất các hàm từ file nào đó
 * import nhận các file đã xuất đó
 *
 * Khi đó ta có thể sử dụng các hàm trong file xuất
 * trong file nhận
 */
/**Trong trường hợp này là Test3 xin phép vào file SearchBar,SearchList
 * để lấy code cho nó
 */
/**File cho phép thì phải export const...và ko có export default
 * Còn file xin thì phải import {file cho phép}
 */
