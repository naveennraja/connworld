import React from 'react';

const ImageComponent = (props) => {
  const { src, title } = props;
  return (
    <div>
      <img src={src} alt={title} style={{ width: '100%' }} />
    </div>
  );
};

export default ImageComponent;
