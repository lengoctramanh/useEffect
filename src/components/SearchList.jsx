import React, { Fragment } from 'react';
import './ResultList.css';

/**Xuất biến SearchList có prop là { results}  */
export const SearchList = ({ results }) => {
  return (
    <Fragment>
      {/**Kiểm tra  độ dài của mảng results có lớn hơn 0 hay không */}
      {results.length > 0 && ( //Toán tử logic "và" (&&).
        <div className="results-list">
          <ul>
            {/**Mỗi phần tử trong results đc lặp qua bằng method MAP.
             Mỗi phần tử đó được hiển thị trong một thẻ li với key là id và nội dung là result.name.*
             */}
            {results.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};
//*Nếu results.length lớn hơn 0, phần code sau dấu && sẽ được thực thi.
//*Nếu results.length không lớn hơn 0, phần code sau dấu && sẽ bị bỏ qua.
