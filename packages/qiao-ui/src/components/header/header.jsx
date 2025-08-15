// react
import React from 'react';

// css
import './header.scss';

// ui
import { Link } from '../../index.js';

// log
import { colorLog } from '../../util/log.js';

/**
 * header
 */
export const Header = (props) => {
  colorLog('qiao-ui/components/header: render');

  const navs =
    props.navs &&
    props.navs.map((nav, index) => {
      const linkDiv = <Link blank={nav.blank} url={nav.url} txt={nav.name} />;
      const clickDiv = <div onClick={nav.onClick}>{nav.name}</div>;
      const navDiv = nav.onClick ? clickDiv : linkDiv;

      return (
        <div className="nav nav-txt right" key={index}>
          {navDiv}
        </div>
      );
    });

  return (
    <div className={props.center ? 'header center' : 'header'}>
      <div className="logo nav-txt">
        <Link url={props.logoUrl} txt={props.logo} />
      </div>
      <div className="navs">{navs}</div>
    </div>
  );
};
