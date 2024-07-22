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

  let img;
  if (props.type == 'qq') img = <img src="https://static-insistime.vincentqiao.com/00_insistime/qq.jpeg" alt="qq" />;
  if (props.type == 'donate')
    img = <img src="https://static-insistime.vincentqiao.com/00_insistime/donate2.png" alt="donate" />;
  if (props.type == 'electron')
    img = <img src="https://static.vincentqiao.com/qrcode/wechat-electron.jpg" alt="electron" />;
  return (
    <div className="donate">
      <div className="donate-img">{img}</div>
      {props.tip ? <div className="donate-tip">{props.tip}</div> : null}
    </div>
  );
};
