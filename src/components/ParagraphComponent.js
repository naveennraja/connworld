import React from 'react';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
const ParagraphComponent = (props) => {
  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window);
  const clean = DOMPurify.sanitize(props.text);

  const dom = new JSDOM(props.text);
  //const window = new JSDOM('').window;
  //const DOMPurify = createDOMPurify(dom.window);
  console.log('Dom', dom);
  DOMPurify.sanitize(dom.window.document.body, { RETURN_DOM: true });
  return (
    <div className='text-justify text-black  py-4'>
      {<div dangerouslySetInnerHTML={{ __html: clean }} />}
    </div>
  );
};

export default ParagraphComponent;
