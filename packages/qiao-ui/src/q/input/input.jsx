// react
import React from 'react';

// css
import './input.scss';

/**
 * QInput
 */
export const QInput = (props) => {
  const hiddenInput = <input type={props.type} value={props.value} />;

  const normalInput = (
    <div className="QInput">
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        maxLength={props.maxLength}
      />
    </div>
  );

  return props.type == 'hidden' ? hiddenInput : normalInput;
};
