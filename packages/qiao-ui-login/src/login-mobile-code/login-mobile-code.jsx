// react
import React, { useState } from 'react';

// css
import './login-mobile-code.scss';

// components
import { QButton, QInput } from 'qiao-ui';

/**
 * LoginMobileCode
 */
export const LoginMobileCode = (props) => {
  // state
  const [mobile, setMobile] = useState('');
  const [code, setCode] = useState('');
  const [codeBtnTxt, setCodeBtnTxt] = useState('发送验证码');
  const [loginTips, setLoginTips] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={props.bg} alt="loginBg" />
      </div>
      <div className="login-right">
        <div className="login-box">
          <div className="login-title">
            <span className="green">Hi，</span>欢迎来到{props.title}
          </div>
          <div className="login-mobile">
            <div className="login-mobile-l">+86</div>
            <div className="login-mobile-r">
              <QInput
                type="text"
                placeholder="请输入手机号码"
                value={mobile}
                maxLength="11"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
          <div className="login-code">
            <div className="login-code-l">
              <QInput type="text" placeholder="验证码" value={code} onChange={(e) => setCode(e.target.value)} />
            </div>
            <div
              className={`login-code-r`}
              onClick={async () => {
                await props.clickSendCode(mobile, setLoginTips, setLoginSuccess, setCodeBtnTxt);
              }}
            >
              {codeBtnTxt}
            </div>
          </div>
          {loginSuccess ? (
            <div className="login-tips suc">{loginTips}</div>
          ) : (
            <div className="login-tips err">{loginTips}</div>
          )}

          <div className="login-btn">
            <QButton
              text="登录/注册"
              onClick={async () => {
                await props.clickLogin(mobile, code, setLoginTips, setLoginSuccess);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
