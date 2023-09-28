import React, { Fragment, useEffect, useState } from 'react';

const UpButton = () => {
  const [topButton, setTopButton] = useState(false);
  const handleTopButton = () => {
    if (window.scrollY > 20) {
      setTopButton(true);
    } else {
      setTopButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleTopButton);
  }, []);
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
