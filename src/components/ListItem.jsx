import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name, handleClick, gender }) => {
  return (
    <div className="alert w-auto shadow-lg m-4">
      <div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <div className="text-xs">{gender}</div>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-sm" onClick={() => handleClick(true)}>
          See
        </button>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  handleClick: PropTypes.func
};

export default ListItem;
