// react
import React from 'react';

// css
import './button.scss';

/**
 * q button
 */
export const QButton = (props) => {
  // btn
  const divOnlyBtn = (
    <div className="QButton" onClick={props.onClick}>
      <div className="ctx">{props.text}</div>
    </div>
  );

  // icon
  const divHasIcon = (
    <div className="QButton" onClick={props.onClick}>
      <div className="icon">
        <img src={props.icon} alt="button icon" />
      </div>
      <div className="icon-ctx">{props.text}</div>
    </div>
  );

  // r
  return props.icon ? divHasIcon : divOnlyBtn;
};
