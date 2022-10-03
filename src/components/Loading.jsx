import React, { memo } from 'react';
import loading from '../assets/loading.gif';

const Loading = () => {
  return (
    <div className="text-center">
      <img className="max-h-20 mx-auto" src={loading} alt="loading" />
    </div>
  );
};

export default memo(Loading);
