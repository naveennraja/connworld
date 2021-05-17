import React from 'react';
import './AccordionCard.css';
import ParagraphComponent from '../../ParagraphComponent';
const AccordionCardComponent = (props) => {
  const { idx, textContent, textHeading } = props;

  return (
    <>
      <div className='card'>
        <div className='card-header' id={`heading${idx}`}>
          <h5 className='mb-0'>
            <button
              className='btn btn-link  w-100 text-left'
              data-toggle='collapse'
              data-target={`#collapse${idx}`}
              aria-expanded='false'
              aria-controls={`collapse${idx}`}>
              {textHeading}
            </button>
          </h5>
        </div>

        <div
          id={`collapse${idx}`}
          className='collapse'
          aria-labelledby={`heading${idx}`}
          data-parent='#accordion'>
          <div className='card-body'>
            <ParagraphComponent text={textContent}></ParagraphComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionCardComponent;
