import React from 'react';
import './Circle.css';
const CircleComponent = ({ text, classNames }) => {
  return (
    <div className='circle text-primary text-center'>
      <i className={` fa-4x  small-icon text-priamry ${classNames}`}></i>
      <p className='text-break mt-3 smallText'>{text}</p>
    </div>
  );
};

export default CircleComponent;
