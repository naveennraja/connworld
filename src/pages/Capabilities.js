import React from 'react';
import ParagraphComponent from '../components/ParagraphComponent';
import ImageComponent from '../components/ImageComponent';
import capabilityImage from '../images/capability.png';
const Capabilities = (props) => {
  const { contentText, title } = props.contents;
  return (
    <>
      <h3>{title}</h3>
      <div className='row'>
        <div className='col-md-6 col-12'>
          <ImageComponent src={capabilityImage} title={title} />
        </div>
        <div className='col-md-6 col-12'>
          <ParagraphComponent text={contentText}></ParagraphComponent>
        </div>
      </div>
    </>
  );
};

export default Capabilities;
