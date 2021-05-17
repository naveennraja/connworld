import React from 'react';
import ParagraphComponent from '../components/ParagraphComponent';

const WhoweAre = (props) => {
  const { contentText } = props.contents;
  return <ParagraphComponent text={contentText} />;
};

export default WhoweAre;
