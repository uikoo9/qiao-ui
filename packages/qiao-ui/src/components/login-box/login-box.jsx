// react
import React, { useState } from 'react';

// css
import './login-box.scss';

// components
import { Input, Button, Tips } from '../../index.js';

// log
import { colorLog } from '../../util/log.js';

/**
 * login box
 */
export const LoginBox = (props) => {
  colorLog('qiao-ui/components/login-box: render');

  // state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginTips, setLoginTips] = useState('');

  // click login
  const clickLogin = async () => {
    colorLog('qiao-ui/components/login-box: clickLogin');

    // check
    setLoginTips('');
    if (!username) {
      setLoginTips(props.usernameTip || 'need username');
      return;
    }
    if (!password) {
      setLoginTips(props.passwordTip || 'need password');
      return;
    }

    // login
    const res = await props.loginApi(username, password);
    if (!res || res.type !== 'success') {
      setLoginTips(res.msg);
      return;
    }

    // suc
    setLoginTips(res.msg);
    props.loginCallback(res);
  };

  // return
  return (
    <div className="box">
      <Input
        type="text"
        placeholder={props.usernameHolder}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder={props.passwordHolder}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={clickLogin} text={props.loginBtn} />
      <Tips tips={loginTips} />
    </div>
  );
};
