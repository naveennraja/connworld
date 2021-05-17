import React from 'react';

import qualityImage from '../images/quality.jpeg';
import ImageComponent from '../components/ImageComponent';
import ParagraphComponent from '../components/ParagraphComponent';

const Quality = (props) => {
  const { contentText, title } = props.contents;
  return (
    <>
      <h3>{title}</h3>
      <div className='row'>
        <div className='col-md-6 col-12'>
          <ImageComponent src={qualityImage} title={title} />
        </div>
        <div className='col-md-6 col-12'>
          <ParagraphComponent text={contentText}></ParagraphComponent>
        </div>
      </div>
    </>
  );
};

export default Quality;
