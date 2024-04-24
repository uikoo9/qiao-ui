// react
import React from 'react';

// css
import './footer.scss';

// ui
import { Link, Poweredby } from '../../index.js';

// log
import { colorLog } from '../../util/log.js';

/**
 * footer
 */
export const Footer = (props) => {
  colorLog('qiao-ui/components/footer: render');

  return (
    <>
      {props.poweredby ? <Poweredby projects={props.poweredby} /> : null}
      <div className="footer">
        <Link url={props.companyUrl} txt={props.companyName} />
        &nbsp;&nbsp;&nbsp;
        <Link blank={true} url={props.beianUrl} txt={props.beianName} />
      </div>
    </>
  );
};
