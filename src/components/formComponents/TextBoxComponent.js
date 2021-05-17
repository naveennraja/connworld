import React from 'react';

const TextBoxComponent = (props) => {
  const { name, type } = props;
  const id = name.replace(/\s/g, '');

  return (
    <div className='form-group'>
      <input
        type={type}
        className='form-control'
        id={id}
        name={id}
        placeholder={name}
      />
    </div>
  );
};

export default TextBoxComponent;
