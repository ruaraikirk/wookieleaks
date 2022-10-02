import React from 'react';
import PropTypes from 'prop-types';

/**
 * TODO When clicking on a character, this modal should show more information about them via a new API request.
 * Details should include which films they have appeared in, what planet they are from, birth year, and eye colour.
 */

const Modal = ({ name, onClose, visible = false }) => {
  if (!visible) {
    return <></>;
  }

  return (
    <div className="bg-neutral-focus bg-opacity-40 duration-200 ease-in-out z-50 fixed inset-0 flex justify-center">
      <div className="modal-box my-auto">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="py-4">Yo been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <div className="modal-action">
          <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => onClose()}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  name: PropTypes.string,
  onClose: PropTypes.func,
  visible: PropTypes.bool
};

export default Modal;
