// react
import React from 'react';

// css
import './container.scss';

// log
import { colorLog } from '../../util/log.js';

/**
 * container
 */
export const Container = (props) => {
  colorLog('qiao-ui/basic/container: render');

  return (
    <div className="container" style={{ width: props.width }}>
      {props.children}
    </div>
  );
};
