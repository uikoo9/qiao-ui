// react
import React from 'react';

// css
import './confirm.scss';

// ui
import { QButton } from 'qiao-ui-button';
import { QModal } from '../index.js';

/**
 * QConfirm
 */
export const QConfirm = (props) => {
  // r
  return (
    <div className="QConfirm">
      <QModal
        show={props.show}
        closeModal={() => {
          props.onClose();
        }}
      >
        <div className="QConfirm-content">
          <div className="txts">
            <div className="title">{props.title}</div>
            {props.desc ? <div className="desc">{props.desc}</div> : null}
          </div>

          <div className="btns">
            <div className="btn">
              <QButton text={props.btnCancel} onClick={props.onCancel} />
            </div>
            <div className="btn l">
              <QButton text={props.btnOK} onClick={props.onOK} />
            </div>
          </div>
        </div>
      </QModal>
    </div>
  );
};
