import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader-container'>
      <div className='loader-pointer'></div>
      <div className='loader-pointer'></div>
      <div className='loader-pointer'></div>
    </div>
  );
};

export default Loader;
