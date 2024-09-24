// react
import React from 'react';

// css
import './alert.scss';

// ui
import { QButton } from 'qiao-ui-button';
import { QModal } from '../index.js';

/**
 * QAlert
 */
export const QAlert = (props) => {
  // r
  return (
    <div className="QAlert">
      <QModal
        show={props.show}
        closeModal={() => {
          props.onClose();
        }}
      >
        <div className="QAlert-content">
          <div className="txts">
            <div className="title">{props.title}</div>
          </div>

          <div className="btns">
            <div className="btn">
              <QButton text={props.btnOK} onClick={props.onOK} />
            </div>
          </div>
        </div>
      </QModal>
    </div>
  );
};
