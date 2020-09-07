
import React from 'react';

const Preloader = () => {
  return (
    <div className="progress blue lighten-4" style={{ margin: '1.5em' }}>
      <div className="indeterminate blue" />
    </div>
  );
};

export default Preloader;