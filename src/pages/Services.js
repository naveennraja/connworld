import React from 'react';
// import Timeline from '../components/charts/Timeline';
import ParagraphComponent from '../components/ParagraphComponent';
import CardboardComponent from '../components/UIComponent/CardboardComponent/CardboardComponent';
import AccordionCardComponent from '../components/UIComponent/AccordionCardComponent/AccordionCardComponent';

const Services = (props) => {
  const {
    contentText,
    title,
    cards,
    cardsIcon,
    contentTextDesign,
    contentTextServices,
    qualityService
  } = props.contents;
  if (cards !== undefined) {
    return (
      <>
        <h3>{title}</h3>
        <div className='row'>
          <div className='col'>
            <ParagraphComponent text={contentText}></ParagraphComponent>
          </div>
        </div>

        <div className='row solution-container'>
          {Object.keys(cards || {}).map((ele, idx) => (
            <CardboardComponent
              key={ele}
              text={ele}
              data={cards[ele]}
              icon={cardsIcon[idx]}></CardboardComponent>
          ))}
        </div>
        <div className='row'>
          <div id='accordion' className='w-100'>
            <div className='col'>
              <ParagraphComponent
                text={contentTextServices}></ParagraphComponent>
            </div>
            {Object.keys(qualityService || {}).map((ele, idx) => (
              <AccordionCardComponent
                key={`ele_${idx}`}
                textHeading={ele}
                textContent={qualityService[ele]}
                idx={idx}></AccordionCardComponent>
            ))}
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <ParagraphComponent text={contentTextDesign}></ParagraphComponent>
          </div>
        </div>
      </>
    );
  }
};

export default Services;
