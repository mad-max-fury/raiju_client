'use client';

import React from 'react';
import { Typography } from '../typography';
import { ToggleProps } from './index.types';
import { cva } from 'class-variance-authority';

const toggle = cva('toggle', {
  variants: {
    size: {
      small:
        'h-[23px] w-[43px] after:h-4 after:w-4 after:left-1 peer-checked:after:translate-x-[calc(100%+4px)]',
      medium:
        'h-[38px] w-[73px] after:left-[6px] after:h-7 after:w-7 after:border-gray-300 peer-checked:after:translate-x-[calc(100%+6px)]',
    },
    color: {
      secondary: 'bg-secondary-main peer-checked:after:border-white peer-checked:bg-secondary-main',
      'secondary-white':
        'bg-white border border-primary-main peer-checked:border-secondary-main peer-checked:bg-secondary-main',
    },
  },
  compoundVariants: [],
});

const Toggle: React.FC<ToggleProps> = (props) => {
  const { customClassName, label, toggleSize = 'medium', color = 'secondary', ...rest } = props;

  return (
    <label className="flex w-fit items-center gap-3">
      {label && (
        <Typography variant="caption-s" color="gray-1" customClassName="capitalize">
          {label}
        </Typography>
      )}

      <div
        className={`${customClassName} relative inline-flex h-fit cursor-pointer items-center gap-2`}
      >
        <input type="checkbox" className="peer sr-only" {...rest} />
        <span
          className={toggle({
            size: toggleSize,
            color,
            className:
              "peer rounded-full transition-all after:absolute after:top-1/2 after:-translate-y-1/2 after:rounded-full after:border after:bg-primary-main after:shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06)_0px_1px_3px_0px_rgba(16,24,40,0.10)] after:transition-all after:content-[''] peer-focus:ring-4 peer-focus:ring-primary-light-200",
          })}
        ></span>
      </div>
    </label>
  );
};

export { Toggle };
