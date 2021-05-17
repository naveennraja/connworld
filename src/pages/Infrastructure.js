import React from 'react';
// import infrastructureImage from '../images/infrastructure.jpg';
import infrastructureImage from '../images/infrastructure.jpg';

import ImageComponent from '../components/ImageComponent';
import ParagraphComponent from '../components/ParagraphComponent';

const Infrastructure = (props) => {
  const { contentText, title } = props.contents;
  return (
    <>
      <h3>{title}</h3>
      <div className='row'>
        <div className='col-md-6 col-12'>
          <ImageComponent src={infrastructureImage} title={title} />
        </div>
        <div className='col-md-6 col-12'>
          <ParagraphComponent text={contentText}></ParagraphComponent>
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
