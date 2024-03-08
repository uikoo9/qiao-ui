// react
import React from 'react';

// css
import './viewer.scss';

// log
import { colorLog } from '../../util/log.js';

/**
 * viewer
 */
export const Viewer = (props) => {
  colorLog('qiao-ui/basic/viewer: render');

  const viewer = (
    <div className="viewer-container">
      <div className="close" onClick={props.close}>
        x
      </div>
      <img src={props.src} alt={props.alt} />
    </div>
  );

  return props.show ? viewer : null;
};
