// react
import React, { useState } from 'react';

// css
import './login-username-password.scss';

// components
import { Input, Button, Tips } from 'qiao-ui';

// Logger
import { Logger } from 'qiao.log.js';
const logger = Logger('qiao-ui-login');

/**
 * LoginUsernamePassword
 */
export const LoginUsernamePassword = (props) => {
  const methodName = 'LoginUsernamePassword';
  logger.info(methodName, 'render');

  // state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginTips, setLoginTips] = useState('');

  // click login
  const clickLogin = async () => {
    logger.info(methodName, 'clickLogin');

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
