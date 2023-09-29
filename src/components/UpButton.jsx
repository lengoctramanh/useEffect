import React, { Fragment, useEffect, useState } from 'react';

const UpButton = () => {
  // Tạo state để lưu trữ vị trí ban đầu của trang web là false
  const [topButton, setTopButton] = useState(false);
  /**Khi người dùng kéo trang web, hãy cập nhật state để phản ánh
   * vị trí hiện tại của trang web */
  const handleTopButton = () => {
    if (window.scrollY > 100) {
      setTopButton(true);
    } else {
      setTopButton(false);
    }
  };
  /*Khi trang web được tải, hãy lưu trữ vị trí ban,
    đầu của trang web vào state*/
  useEffect(() => {
    window.addEventListener('scroll', handleTopButton);
  }, []);
  /**Khi người dùng click vào button, hãy đặt lại vị trí của
   * trang web về vị trí ban đầu */
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <div className="btn">
        {topButton && (
          <button className="top-btn" onClick={top}>
            <span>^</span>
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default UpButton;
/** B1:xét điều kiện của topButton
 * B2:Nếu điều kiện topButton có giá trị true, thì React sẽ
 * đánh giá biểu thức ( <button className="top-btn" onClick={top}>
 * <span>^</span> </button> ).
  B3:Nếu điều kiện topButton có giá trị false,
  thì React sẽ trả về null.
  Biểu thức này dùng để xét một nút quay lại đầu trang
 */
