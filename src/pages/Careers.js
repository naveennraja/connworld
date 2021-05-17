import React from 'react';
import ParagraphComponent from '../components/ParagraphComponent';
const Careers = (props) => {
  const { contentText, title } = props.contents;
  return (
    <>
      <h3>{title}</h3>
      <div className='row'>
        <div className=' col-12'>
          <ParagraphComponent text={contentText}></ParagraphComponent>
        </div>
      </div>
    </>
  );
};

export default Careers;
