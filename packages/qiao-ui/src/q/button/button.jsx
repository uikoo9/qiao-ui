// react
import React from 'react';

// css
import './button.scss';

/**
 * q button
 */
export const QButton = (props) => {
  return (
    <div className="QButton" onClick={props.onClick}>
      {props.icon ? (
        <div className="icon">
          <img src={props.icon} alt="button icon" />
        </div>
      ) : null}
      <div className="ctx">{props.text}</div>
    </div>
  );
};
