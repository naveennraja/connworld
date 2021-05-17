import React from 'react';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
const ParagraphComponent = (props) => {
  return (
    <div className='text-justify text-black  py-4'>
      {
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.text) }}
        />
      }
    </div>
  );
};

export default ParagraphComponent;
