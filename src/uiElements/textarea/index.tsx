'use client';

import React, { ForwardedRef } from 'react';
import clsx from 'clsx';
import { FieldValues, UseFormRegisterReturn, Path } from 'react-hook-form';

import { raleway } from '@/styles/fonts';

import { Typography } from '../typography';
import { TextAreaProps } from './index.types';
import { UseSMSInputReturn } from '@/hooks';

const TextAreaComponent = <FV extends FieldValues>(
  props: TextAreaProps<FV> & Partial<UseSMSInputReturn>,
  ref?: ForwardedRef<HTMLTextAreaElement>
) => {
  const {
    placeholder,
    errorMsg,
    successMsg,
    label,
    register,
    name,
    customClassName,
    pageCount,
    charCount,
    maxCharacters,
    totalPages,
    isSMSInput,
    ...rest
  } = props;

  // React hook form register
  const registerInput: UseFormRegisterReturn<Path<FV>> | object = register
    ? register(name, { required: rest.required })
    : {};

  return (
    <div className={`${raleway.className} relative z-0 box-content flex w-full  flex-col`}>
      {label && (
        <label
          className={clsx(
            'mb-4 w-fit text-body-s font-semibold',
            errorMsg ? 'text-error' : 'text-gray-3'
          )}
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <div
        className={clsx(
          'relative rounded-xl border px-6 py-5',
          isSMSInput && 'h-[310px] pb-11',
          errorMsg
            ? 'border-error text-error focus-within:ring-error '
            : successMsg
            ? 'border-success text-success focus-within:border-success focus-within:ring-success'
            : 'focus-within:ring-primary-dark border-gray-4 text-primary-main focus-within:border-success'
        )}
      >
        <textarea
          className={clsx(
            `grou block h-full min-h-[100px] w-full resize-none appearance-none bg-white text-[0.875rem] font-semibold placeholder:text-[0.875rem] placeholder:font-normal placeholder:text-gray-4 autofill:bg-white focus:outline-none`,
            rest.disabled
              ? 'disabled:text-black-300 disabled:border-black-50/10 disabled:cursor-not-allowed disabled:bg-primary-light-100'
              : '',
            customClassName
          )}
          id={name}
          placeholder={placeholder}
          {...rest}
          ref={ref}
          {...registerInput}
        />

        {isSMSInput && (
          <div className="absolute bottom-[1px] left-1/2 flex w-[calc(100%-5px)] -translate-x-1/2 justify-between rounded-xl bg-white px-6 py-3">
            <Typography variant="body-s" font="raleway" color="gray-3" fontWeight="semi-bold">
              Parts:{' '}
              <span className="text-gray-1">
                {pageCount}/{totalPages}
              </span>
            </Typography>

            <Typography variant="body-s" font="raleway" color="gray-3" fontWeight="semi-bold">
              Characters count:{' '}
              <span className="text-gray-1">
                {charCount}/{maxCharacters}
              </span>
            </Typography>
          </div>
        )}
      </div>

      {errorMsg || successMsg ? (
        <Typography
          variant="caption-s"
          fontWeight="regular"
          color={errorMsg ? 'error' : 'success'}
          customClassName="mt-2"
        >
          {errorMsg || successMsg}
        </Typography>
      ) : null}
    </div>
  );
};

export type TextAreaComponentType = <FV extends FieldValues>(
  props: TextAreaProps<FV> & { ref?: React.ForwardedRef<HTMLTextAreaElement> }
) => ReturnType<typeof TextAreaComponent>;

const TextArea = React.forwardRef(TextAreaComponent) as TextAreaComponentType;

export { TextArea };
export * from './index.types';
