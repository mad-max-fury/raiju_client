'use client';

import React from 'react';
import { ITooltip, Tooltip as ReactTooltip } from 'react-tooltip';

const Tooltip = (props: ITooltip) => {
  return (
    <ReactTooltip
      className="max-w-[500px] !bg-secondary-main !font-semibold !text-primary-main"
      place="top"
      {...props}
    >
      {props.children}
    </ReactTooltip>
  );
};

export { Tooltip };
