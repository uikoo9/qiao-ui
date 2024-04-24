// react
import React from 'react';

// components
import { Breadcrumbs } from '../../index.js';

// log
import { colorLog } from '../../util/log.js';

/**
 * poweredby
 */
export const Poweredby = (props) => {
  colorLog('qiao-ui/components/poweredby: render');

  const projects = props.projects;
  const breadcrumbs = projects.map((item, index) => {
    return {
      id: index + 1,
      name: item.name,
    };
  });

  return (
    <Breadcrumbs
      breadcrumbs={breadcrumbs}
      breadcrumbsActiveId={1}
      onClick={(id) => {
        if (id === 1) return;
        window.open(projects[id - 1].link, '_blank');
      }}
    />
  );
};
