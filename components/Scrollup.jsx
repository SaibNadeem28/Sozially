import React, { useState, useEffect } from 'react';

const scrollButtonStyles = {
  position: 'fixed',
  bottom: '10px',
  right: '10px',
  padding: '5px',
  borderRadius: '20px',
  backgroundColor: '#fff',
  color: '#fff',
  cursor: 'pointer',
  border: 'none',
  zIndex: 10,
};

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {visible && (
        <button type="button" onClick={scrollToTop} style={scrollButtonStyles}>
          <img src="/fast-arrow-up.svg" />
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
