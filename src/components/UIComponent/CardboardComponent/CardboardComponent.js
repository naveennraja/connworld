import React from 'react';
import './Cardboard.css';
const CardboardCompoonent = (props) => {
  const { text, data, icon } = props;
  if (data !== undefined) {
    return (
      <>
        <div className='card my-4 mx-auto'>
          <div className='top-container p-4'>
            <i className={`${icon} fa-4x text-center  my-3 w-100`}></i>

            <h6 className='text-white text-center display-6'>{text}</h6>
          </div>
          <div className='bottom-container container'>
            <ul>
              {data.map((contents) => (
                <li key={contents}>{contents}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
};

export default CardboardCompoonent;
