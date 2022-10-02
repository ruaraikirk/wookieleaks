import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className="flex flex-col h-screen overflow-hidden">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Container;
