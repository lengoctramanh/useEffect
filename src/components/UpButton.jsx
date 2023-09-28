import React, { Fragment, useEffect, useState } from 'react';

const UpButton = () => {
  // const [topButton, setTopButton] = useState(false);
  // const handleTopButton = () => {
  //   if (window.scrollY > 20) {
  //     setTopButton(true);
  //   } else {
  //     setTopButton(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleTopButton);
  // }, []);
  const top = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Fragment>
      <button className="top-btn" onClick={top}>
        <span>^</span>
      </button>
    </Fragment>
  );
};

export default UpButton;
