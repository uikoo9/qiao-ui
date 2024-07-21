// react
import React from 'react';

// css
import './modal.scss';

/**
 * q modal
 */
export const QModal = (props) => {
  const modal = (
    <div className="QModal">
      <div className="modal">
        <div className="modal-close" onClick={props.closeModal}></div>
        {props.children}
      </div>
    </div>
  );

  return props.show ? modal : null;
};
