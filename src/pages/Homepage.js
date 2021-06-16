import React from 'react';
import ParagraphComponent from '../components/ParagraphComponent';
import CircleComponent from '../components/UIComponent/CircleComponent/CircleComponent';

const Homepage = (props) => {
  const { contentText, coreValues } = props.contents;
  if (coreValues !== undefined) {
    return (
      <>
        <>
          <h3 className='display-4 text-primary w-100 text-center'>
            ConnWorld Engineering
          </h3>
          <ParagraphComponent text={contentText}></ParagraphComponent>
        </>
        <h3 className='w-100 display-5 bold'>Core Value</h3>
        <div className='row'>
          {Object.keys(coreValues).map((val) => (
            <CircleComponent
              key={val}
              text={val}
              classNames={coreValues[val]}></CircleComponent>
          ))}
        </div>
      </>
    );
  }
};

export default Homepage;
