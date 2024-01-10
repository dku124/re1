import React from 'react';

const Helmet = (props) => {
  document.title = "Food - " + props.title;
  return (
    <div>
      <div className="w-100">{props.children}</div>
    </div>
  );
};

export default Helmet;