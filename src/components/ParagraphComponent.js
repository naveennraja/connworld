import React from 'react';
//import createDOMPurify from 'dompurify';
//import { JSDOM } from 'jsdom';
const ParagraphComponent = (props) => {
  // const window = new JSDOM('').window;
  //const DOMPurify = createDOMPurify(window);
  //const clean = DOMPurify.sanitize(props.text);
  //console.log('W', window, '\nDM', DOMPurify, '\nC', clean);
  return (
    <div className='text-justify text-black  py-4'>
      {/* {<div dangerouslySetInnerHTML={{ __html: clean }} />} */}
    </div>
  );
};

export default ParagraphComponent;
