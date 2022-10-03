import React from 'react';
import PropTypes from 'prop-types';

const ModalWrapper = ({ closeFn, children }) => {
  return (
    <div className="bg-neutral-focus bg-opacity-40 duration-200 ease-in-out z-50 fixed inset-0 flex justify-center">
      <div className="modal-box my-auto">
        {children}
        <div className="modal-action">
          <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => closeFn()}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

ModalWrapper.propTypes = {
  closeFn: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default ModalWrapper;
