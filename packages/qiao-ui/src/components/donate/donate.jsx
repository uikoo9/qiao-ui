// react
import React from 'react';

// css
import './donate.scss';

// log
import { colorLog } from '../../util/log.js';

/**
 * donate
 */
export const Donate = (props) => {
  colorLog('qiao-ui/components/donate: render');

  const img =
    props.type == 'qq' ? (
      <img src="https://static.insistime.com/00_insistime/qq.jpeg" alt="qq" />
    ) : (
      <img src="https://static.insistime.com/00_insistime/donate2.png" alt="donate" />
    );
  return (
    <div className="donate">
      <div className="donate-img">{img}</div>
      {props.tip ? <div className="donate-tip">{props.tip}</div> : null}
    </div>
  );
};
